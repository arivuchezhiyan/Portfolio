# Arivuchezhiyan E — Engineering Portfolio

An industrial-grade, zero-dependency, ultra-high-performance web application showcasing full-stack engineering and Unreal Engine 5 gameplay architecture. Built with pure Vanilla HTML5, CSS3 Glassmorphism, and ECMAScript modules, served via a custom Node.js HTTP/1.1 Range streaming server with Google Apps Script serverless telemetry.

---

## ⚡ Engineering Highlights & Metrics

- **Zero-Framework Overhead**: 100% vanilla architecture — eliminates megabytes of client framework hydration overhead.
- **Sub-Second Paint Times**: First Contentful Paint (FCP) in < 0.5s; Largest Contentful Paint (LCP) < 1.0s.
- **Wire Payload Reduction**: Native Node.js `zlib` Gzip stream compression reduces initial HTML payload from 135 KiB down to ~27 KiB (80% drop).
- **Lighthouse Scores**: High green ratings across Performance, Accessibility (100), Best Practices (100), and SEO (100).
- **Security Headers**: Production-grade HTTP security headers served natively:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - Long-term immutable caching (`Cache-Control: public, max-age=31536000, immutable`) for static assets.

---

## 📁 Repository Structure

```text
├── archive/                     # Archived legacy code & experiments
│   └── legacy_nextjs/           # Archived early Next.js iteration
├── public/                      # Static production assets
│   ├── favicon.svg              # Vector brand monogram favicon
│   ├── PRO1.mp4                 # High-definition UE5 gameplay demonstration video
│   └── space_station_thumb.jpg  # High-definition showcase poster visual
├── google_apps_script.js        # Serverless Apps Script webhook for Google Sheets/Gmail dispatch
├── index.html                   # Core single-page application & responsive layout
├── package.json                 # Project configuration & npm scripts
├── server.js                    # High-performance Node.js HTTP server with range streaming
└── README.md                    # Technical documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.0.0` or higher (standard library only; no external npm dependencies required).

### Quick Start
```bash
# Start the production server
npm start
```
Or directly:
```bash
node server.js
```

Then visit:
```text
http://localhost:3000
```

---

## 🛠️ Features & Systems

1. **Dual Persona Mode Switcher**:
   - **Software Engineer Mode**: Showcases MERN/Electron applications, Python AI automation, and distributed systems.
   - **Game Dev Mode**: Unveils Unreal Engine 5 C++ mechanics, VR interaction toolkits, and landscape architecture.
2. **Dynamic Web Audio Synthesizer**:
   - Programmatic Web Audio API feedback triggers subtle micro-acoustic feedback without any external audio file downloads.
3. **Industrial Telemetry Contact System**:
   - Verified communication modal connected to Google Apps Script.
   - Google reCAPTCHA v2 with dark-themed glass container, loaded strictly on demand to protect Core Web Vitals.
4. **Adaptive Media Streaming**:
   - `server.js` supports HTTP 206 Partial Content byte ranges, enabling instant seeking on high-bitrate MP4 videos.

---

## 👨‍💻 Author
**Arivuchezhiyan E**  
*M.Tech Integrated Computer Science & Engineering (2024–2029)*  
*Sri Sivasubramaniya Nadar College of Engineering (SSN), Chennai*  
*Email: arivuchezhiyan000@gmail.com*  
*Website: [https://arivuchezhiyan.github.io/](https://arivuchezhiyan.github.io/)*
