# 🎵 AURA Hi-Fi - Modern Web Audio & Music Player

A sleek, responsive, and tactile web audio streaming and music player application built with modern **HTML5**, **CSS3 (Glassmorphism, Dynamic Ambient Glow, CSS Grid & Flexbox)**, and **JavaScript (ES6+)** with **Web Audio API** spectrum analysis and canvas visualizer.

Developed for the **CodeAlpha Web Development Internship — Task 4: Music Player using JavaScript**.

---

## ✨ Features

### 1. 🎧 Full-Featured Audio Controls
- **Core Playback**: Play, Pause, Next Track, Previous Track.
- **Fast Seeking**: 10-second fast-forward and 10-second rewind quick buttons.
- **Autoplay & Queue Looping**: Automatically advances to the next song upon track completion.
- **Smart Modes**:
  - 🔀 **Shuffle Mode**: Seamless randomized playlist shuffling.
  - 🔁 **Repeat Modes**: Cycle between *Repeat All*, *Repeat One*, and *Repeat Off*.
- **Speed Controller**: Variable playback speed (0.75x, 1.0x, 1.25x, 1.5x, 2.0x).
- **Volume & Mute Control**: Interactive volume slider with mute toggle and volume persistence.

### 2. 🌊 Real-Time Frequency Spectrum Visualizer
- Powered by the **Web Audio API** `AnalyserNode` and HTML5 `<canvas>`.
- Renders responsive 32-band equalizer frequency bars with color gradient fills and dynamic cap pulses.
- Mini waveform animation synced directly to audio play states.

### 3. 🎨 Dynamic Ambient Glow & Vinyl Animation
- Background ambient backlights dynamically adjust their chromatic colors to match the palette of the currently playing album art.
- Realistic spinning vinyl record animation that smoothly slides out and rotates during active playback.

### 4. 📜 Live Synchronized Lyrics Viewer
- Integrated lyrics display with real-time active lyric tracking.
- Click any lyric line to instantly jump/seek audio to that precise timestamp.

### 5. 📂 Playlist Queue & Custom Audio Loader
- Search tracks in real time by song title, artist, or genre.
- Genre filter pills: *All, Synthwave, Lo-Fi, Cyberpunk, Chillhop, Liked (Favorites)*.
- **Local Audio Importer**: Drag & drop or select local `.mp3` / `.wav` files from your device to play your own music locally with instant Object URL playback!

### 6. 🌙 Sleep Timer
- Integrated sleep countdown timer (15 min, 30 min, 45 min, 60 min) that automatically fades and pauses playback when you sleep.

---

## ⌨️ Keyboard Shortcuts Reference

| Shortcut | Action |
| :--- | :--- |
| <kbd>Space</kbd> or <kbd>K</kbd> | Play / Pause |
| <kbd>→</kbd> or <kbd>L</kbd> | Fast Forward 10s |
| <kbd>←</kbd> or <kbd>J</kbd> | Rewind 10s |
| <kbd>N</kbd> | Skip to Next Track |
| <kbd>P</kbd> | Return to Previous Track |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Adjust Volume Up / Down |
| <kbd>M</kbd> | Toggle Mute / Unmute |
| <kbd>S</kbd> | Toggle Shuffle Mode |
| <kbd>R</kbd> | Toggle Repeat Mode |
| <kbd>L</kbd> | Toggle Favorite / Like |
| <kbd>Y</kbd> | Switch to Lyrics View |
| <kbd>V</kbd> | Switch to Visualizer View |
| <kbd>Q</kbd> | Toggle Playlist Queue Drawer |

---

## 🚀 How to Run & Preview

Open `index.html` directly in any web browser:
```bash
# Serve locally with npx or Python
npx serve "Task 4 : Music Player"
# or
python3 -m http.server --directory "Task 4 : Music Player" 8080
```

---

## 📂 Project Structure

```
Task 4 : Music Player/
├── index.html        # Semantic HTML5 UI layout, vinyl disc, and canvas
├── styles.css        # Glassmorphic CSS tokens, dynamic ambient glow, responsive styles
├── script.js         # Web Audio API engine, visualizer canvas, playlist controller
└── README.md         # Task documentation & shortcut guide
```
