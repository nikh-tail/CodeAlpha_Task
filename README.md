<div align="center">

# 🌟 CodeAlpha Frontend Development Internship Tasks

### Complete Frontend Project Suite by Nikhil Rathor • Delhi Technological University (DTU)

[![CodeAlpha Internship](https://img.shields.io/badge/CodeAlpha-Frontend_Development-00f2fe?style=for-the-badge&logo=codeforces&logoColor=black)](https://www.codealpha.tech)
[![GitHub Repositories](https://img.shields.io/badge/GitHub-nikh--tail-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nikh-tail/CodeAlpha_Task)
[![License](https://img.shields.io/badge/License-MIT-06b6d4?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Completed-10b981?style=for-the-badge)]()

<p align="center">
  A premier suite of 4 modern, responsive, and tactile web applications built with semantic <strong>HTML5</strong>, <strong>CSS3 (Glassmorphism, Grid, Flexbox, Canvas &amp; Custom Properties)</strong>, and vanilla <strong>JavaScript (ES6+)</strong> featuring the <strong>Web Audio API</strong>.
</p>

[🖼️ Task 1: Image Gallery](#-task-1-lumina--responsive-image-gallery) • [⚡ Task 2: Calculator](#-task-2-neo-calc-pro--glassmorphic-calculator) • [🚀 Task 3: Portfolio](#-task-3-developer-portfolio-site) • [🎵 Task 4: Music Player](#-task-4-aura-hi-fi--web-music-player)

---

</div>

## 📱 Tasks Overview & Directory

| Task | Title | Key Tech & Features | Status |
| :--- | :--- | :--- | :--- |
| **Task 1** | [**LUMINA — Image Gallery**](./task-1-image-gallery/) | Masonry/Grid layouts, debounced search, CSS filters, fullscreen lightbox with zoom & EXIF | ✅ **Completed** |
| **Task 2** | [**NEO-CALC Pro — Calculator**](./task-2-calculator/) | Standard & Scientific math, Web Audio synth feedback, unit converter suite, calculation tape | ✅ **Completed** |
| **Task 3** | [**Personal Portfolio Site**](./task-3-portfolio/) | Particle canvas, dynamic themes, project modal specs, live GitHub API hub, contact panel | ✅ **Completed** |
| **Task 4** | [**AURA — Hi-Fi Music Player**](./task-4-music-player/) | Web Audio spectrum visualizer, dynamic ambient glow, lyrics sync, shuffle/repeat, local audio import | ✅ **Completed** |

---

## 🖼️ Task 1: LUMINA — Responsive Image Gallery

An interactive, fluid visual gallery designed for exploring photography and digital art assets.

- **Multi-View Modes**: Fluid standard Grid, cascading Masonry view, and high-density Compact thumbnail view.
- **Dynamic Filtering & Live Search**: Debounced instant search matching tags, title, and photographer; multi-category filter pills (*Nature, Architecture, Travel, People, Wildlife, Urban*).
- **CSS Aesthetic Preset Filters**: Instant visual filter styles (*Original, High Pop Vivid, Noir B&W, Vintage Warmth, Cyber Cool, Cinematic Mood*).
- **Fullscreen Lightbox**: Next/Prev looping navigation, bottom thumbnail preview strip, 250% zoom, automated slideshow mode, and rich EXIF camera metadata panel.
- **Gesture & Keyboard Controls**: Touch swiping on mobile and full hotkey navigation (`←`, `→`, `Space`, `Esc`, `F`, `+`, `-`).

👉 **Explore Folder:** [`task-1-image-gallery/`](./task-1-image-gallery/)

---

## ⚡ Task 2: NEO-CALC Pro — Glassmorphic Calculator

An ultra-modern, tactile scientific and standard calculator engine with 4 themes and tactile audio synthesis.

- **Comprehensive Math Engines**:
  - **Standard Mode**: Everyday arithmetic ($+$, $-$, $\times$, $\div$), decimal validation, percentage ($\%$), negation ($\pm$), and live real-time preview computation.
  - **Scientific Mode**: Advanced trigonometry ($\sin, \cos, \tan$ with DEG/RAD switcher), logarithms ($\log_{10}, \ln$), powers ($x^y, x^2$), roots ($\sqrt{x}$), factorials ($n!$), and constants ($\pi, e$).
  - **Unit Converter**: Multi-category conversion tool for *Length*, *Weight*, *Temperature*, and *Data Storage*.
- **Tactile Web Audio Synthesizer**: Generates clean micro-tone tactile clicks on every button press with an instant mute toggle.
- **4 Design Themes**: *Cyber Dark*, *Aurora Glass*, *Midnight OLED*, and *Platinum Light*.
- **Interactive Calculation Tape**: Side drawer recording expression history with timestamps and click-to-insert result feature.
- **Keyboard & Memory Support**: Complete numpad listener, memory bank (**MC**, **MR**, **M+**, **M-**, **MS**), and 1-click clipboard copy with animated toast alerts.

👉 **Explore Folder:** [`task-2-calculator/`](./task-2-calculator/)

---

## 🚀 Task 3: Developer Portfolio Site

A personal developer portfolio engineered for **Nikhil Rathor** (Delhi Technological University).

- **Dynamic Hero & 3 Themes**: Interactive typewriter animation, rotating avatar with orbit badges, and seamless switching between *Dark (Default)*, *Cyber Glow*, and *Light* themes.
- **Interactive Particle Canvas**: Canvas background responding dynamically to cursor movement with reduced-motion support.
- **Filterable Projects Showcase**: Categorized portfolio cards with interactive 3D tilt hover, tech badges, and accessible modal specs dialogs.
- **Live GitHub Activity Hub**: Integrates directly with the GitHub API to fetch real-time public repositories, stars, and language stats for [`@nikh-tail`](https://github.com/nikh-tail).
- **Interactive Contact Panel & 1-Click Clipboard**: Working contact form with topic selectors, and one-click copy buttons for email (`nikhilrathorq@gmail.com`) and phone (`+91 8882949593`).

👉 **Explore Folder:** [`task-3-portfolio/`](./task-3-portfolio/)

---

## 🎵 Task 4: AURA Hi-Fi — Web Music Player

A feature-rich, modern audio streaming and visualizer web application.

- **Audio Playback Engine**: Complete controls (Play, Pause, Next, Previous, 10s Rewind, 10s Fast-Forward) with speed selector ($0.75\times$ to $2.0\times$).
- **Live Spectrum Visualizer**: Real-time 32-band equalizer audio frequency canvas powered by the **Web Audio API** (`AnalyserNode`).
- **Dynamic Ambient Lighting**: Dynamic backlights that automatically sample and shift ambient colors according to the playing album's artwork.
- **Spinning Vinyl Record**: Realistic vinyl disc that smoothly slides out and rotates in sync with active playback.
- **Synchronized Lyrics Viewer**: Scrollable lyrics panel with real-time active lyric line highlight and click-to-seek functionality.
- **Playlist Manager & Local File Importer**: Live track search, genre filters, and local file picker allowing users to play custom `.mp3` / `.wav` audio files directly in the player.
- **Sleep Timer & Favorites**: Countdown sleep timer (15–60 min) and favorite song tracking stored via `localStorage`.

👉 **Explore Folder:** [`task-4-music-player/`](./task-4-music-player/)

---

## 🛠️ Technology Stack

```text
Frontend Architecture : Semantic HTML5, Modern CSS3 (Grid, Flexbox, Glassmorphism, CSS Custom Properties)
Scripting & Logic     : Vanilla JavaScript (ES6+), Web Audio API, Canvas 2D API, Web Storage API
Icons & Typography    : Font Awesome 6.5+, Google Fonts (Plus Jakarta Sans, Outfit, Fira Code)
Tooling & Deployment  : Git, GitHub Pages, Zero External Framework Dependencies (Ultra Lightweight & Fast)
```

---

## 🚀 Running Any Task Locally

Each task is self-contained. Open any task's `index.html` directly in your browser or run a lightweight local HTTP server:

```bash
# Clone the repository
git clone https://github.com/nikh-tail/CodeAlpha_Task.git
cd CodeAlpha_Task

# Start a simple HTTP server (Python 3)
python3 -m http.server 8080

# Or using Node.js npx serve
npx serve .
```

---

## 👨‍💻 Author & Contact

- **Developer**: Nikhil Rathor
- **University**: Delhi Technological University (DTU)
- **GitHub**: [@nikh-tail](https://github.com/nikh-tail)
- **LinkedIn**: [linkedin.com/in/nikhil-rathor-761675389](https://www.linkedin.com/in/nikhil-rathor-761675389/)
- **Email**: [nikhilrathorq@gmail.com](mailto:nikhilrathorq@gmail.com)

---

<div align="center">
  <sub>Developed for the <strong>CodeAlpha Web Development Internship</strong> • 2026</sub>
</div>
