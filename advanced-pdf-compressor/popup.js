pdfjsLib = window['pdfjs-dist/build/pdf'];

pdfjsLib.GlobalWorkerOptions.workerSrc =
    chrome.runtime.getURL("pdf.worker.js");

let compressedBytes = null;

window.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("pdfInput");
    const compressBtn = document.getElementById("compressBtn");
    const downloadBtn = document.getElementById("downloadBtn");
    const status = document.getElementById("status");

    compressBtn.addEventListener("click", async () => {
        try {
            if (!input.files.length) {
                alert("Select a PDF first");
                return;
            }

            status.innerText = "Loading PDF...";

            const file = input.files[0];
            const pdfData = new Uint8Array(await file.arrayBuffer());


            const loadingTask = pdfjsLib.getDocument({ data: pdfData });
            const pdf = await loadingTask.promise;

            const { PDFDocument } = PDFLib;
            const newPdf = await PDFDocument.create();

            for (let i = 1; i <= pdf.numPages; i++) {
                status.innerText = `Compressing page ${i}/${pdf.numPages}`;

                const page = await pdf.getPage(i);
               const level = document.getElementById("level").value;

let scale, quality;

if (level === "low") {
    scale = 1.5;      // higher resolution
    quality = 0.9;    // best quality
}
else if (level === "medium") {
    scale = 1.2;
    quality = 0.7;
}
else { // extreme
    scale = 0.9;
    quality = 0.45;
}

const viewport = page.getViewport({ scale: scale });

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = viewport.width;
canvas.height = viewport.height;

await page.render({
    canvasContext: ctx,
    viewport: viewport
}).promise;

const imgData = canvas.toDataURL("image/jpeg", quality);

                const jpgImage = await newPdf.embedJpg(imgData);
                const pdfPage = newPdf.addPage([canvas.width, canvas.height]);

                pdfPage.drawImage(jpgImage, {
                    x: 0,
                    y: 0,
                    width: canvas.width,
                    height: canvas.height
                });
            }

            compressedBytes = await newPdf.save();

            status.innerText = "Done ✅ Click Download";
            downloadBtn.disabled = false;

        } catch (err) {
            console.error(err);
            status.innerText = "Error: " + err.message;
        }
    });

   downloadBtn.addEventListener("click", () => {
    const blob = new Blob([compressedBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "compressed.pdf";
    a.click();

    URL.revokeObjectURL(url);



    status.innerText = "Download complete ✅ Storage cleared";
});
});
