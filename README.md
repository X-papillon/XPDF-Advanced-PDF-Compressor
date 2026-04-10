# <img src="https://images2.imgbox.com/6e/d9/rff4K0sS_o.png" width="50"/> XPDF Advanced PDF Compressor (Chrome Extension)

Advanced PDF Compressor is a powerful Chrome Extension that compresses PDF files directly in your browser using intelligent image recompression. It provides strong compression similar to professional tools while keeping full privacy and offline functionality.

---

## ✨ Features

* Strong PDF compression engine
* Compression level selector:
  * Low (Best quality)
  * Medium (Balanced)
  * Extreme (Maximum compression)
* Fully offline (no server, no upload)
* Fast processing using browser engine
* Privacy focused — files never leave your device
* Simple and easy to use

---

## 🧠 How It Works

This extension uses an advanced compression method:

* Load PDF file locally
* Render each page to canvas
* Compress page as optimized JPEG image
* Rebuild a new compressed PDF
* Allow user to download compressed file

This method provides much stronger compression than basic PDF optimization.

---

## 📦 Installation

### Method — Developer Mode

1.Download or clone this repository

2.Open Chrome browser

3.Go to chrome://extensions

4.Enable Developer Mode

5.Click "Load unpacked"

6.Select the extension folder

---

## 📁 Project Structure

```
advanced-pdf-compressor/
│
├── manifest.json
├── popup.html
├── popup.js
├── style.css
├── pdf.js
├── pdf.worker.js
└── pdf-lib.min.js
```

---

## 🎛 Compression Levels

* Low
  * Best visual quality
  * Larger file size
  * Recommended for text documents

* Medium
  * Balanced quality and size
  * Recommended for most users

* Extreme
  * Maximum compression
  * Smallest file size
  * Recommended for scanned PDFs

---

## 🔒 Privacy

This extension:

* Does NOT upload files
* Does NOT use external servers
* Does NOT track users
* Does NOT store files permanently

All processing happens locally in your browser.

---

## ⚡ Performance

Typical compression results:

6 MB → 3 MB (Low)
6 MB → 1.8 MB (Medium)
6 MB → 0.9 MB (Extreme)


Results depend on PDF content.

---

## 👨‍💻 Author

Developed by **Xpapillon**

---

## ⭐ Support

If you find this project useful:

- ⭐ Star the repository  
- 🍴 Fork it  
- 🛠 Contribute improvements  

---
## 📸 Screenshots

<p>
  <img src="https://images2.imgbox.com/5d/7b/cdBJWs4X_o.jpg" width="400"/>
  <br/>
  <img src="https://images2.imgbox.com/59/4d/C9ULsKsC_o.jpg" width="400"/>
</p>

---

## ☕ Support the Project

If this project helped you, consider supporting me:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/ashraf07)

Thank you for your support ❤️

## 📜 License

MIT License

