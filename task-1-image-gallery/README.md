# 🌟 LUMINA - Modern Interactive Image Gallery

A responsive, high-performance, and feature-rich Image Gallery web application built with modern **HTML5**, **CSS3 (Grid, Flexbox, Glassmorphism, CSS Custom Properties)**, and vanilla **JavaScript**.

---

## ✨ Features

- 🖼️ **Responsive Multi-Mode Layout**:
  - **Standard Grid**: Fluid `auto-fill` CSS Grid adapting cleanly across mobile, tablet, and desktop screens.
  - **Masonry View**: Dynamic cascading columns for varied aspect ratios.
  - **Compact View**: High-density thumbnail browsing.
- 🔍 **Real-Time Live Search**:
  - Instant debounced filtering matching image title, description, tags, photographer, or location.
- 🏷️ **Category Filter Pills**:
  - Multi-category navigation: *All, Nature, Architecture, Travel, People & Portraits, Wildlife, Urban & Street*.
- 🎨 **Visual Image Style Effects (CSS Filters)**:
  - Apply instant aesthetic filter presets: *Original, Vivid & High Pop, Vintage Warmth, Noir (B&W), Classic Sepia, Cyber Cool, Cinematic Mood*.
- ↕️ **Smart Sorting**:
  - Sort photos by *Most Popular (Likes)*, *Newest First*, or *Title (A – Z)*.
- 💡 **Interactive Lightbox View**:
  - Fullscreen glassmorphic overlay with blur backdrop.
  - **Navigation**: Next (`>`), Previous (`<`), and Loop navigation.
  - **Bottom Thumbnail Strip**: Instant visual thumbnail jumping with active position highlighting.
  - **Autoplay Slideshow**: Automatic image transition with animated progress bar indicator.
  - **Interactive Zoom**: Zoom in up to 250%, zoom out, or reset.
  - **Rich Metadata Panel**: Highlighting photographer credits, location, camera settings (ISO, shutter, aperture), and tag pills.
  - **Fullscreen Toggle**: Native browser Fullscreen API integration.
  - **Direct Download**: High-res download trigger.
- 📱 **Mobile Touch Gestures**:
  - Touch swipe left for *Next* and touch swipe right for *Previous*.
- ❤️ **Interactive Like / Favorite System**:
  - Toggle favorites directly from cards or lightbox with persistent `localStorage` saving.
- 🌓 **Dark & Light Mode Switcher**:
  - Seamless theme transition with `localStorage` preference memory.
- ⌨️ **Comprehensive Keyboard Accessibility**:
  - Hotkey support throughout the app with built-in cheat sheet (`?`).

---

## ⌨️ Keyboard Shortcuts Reference

| Shortcut | Action |
| :--- | :--- |
| <kbd>→</kbd> or <kbd>J</kbd> | Next image in Lightbox |
| <kbd>←</kbd> or <kbd>K</kbd> | Previous image in Lightbox |
| <kbd>Esc</kbd> | Close Lightbox or Modal |
| <kbd>Space</kbd> | Play / Pause Slideshow |
| <kbd>+</kbd> / <kbd>-</kbd> | Zoom In / Zoom Out in Lightbox |
| <kbd>F</kbd> | Toggle Fullscreen Mode |
| <kbd>/</kbd> | Focus Search Bar |
| <kbd>T</kbd> | Toggle Dark / Light Theme |
| <kbd>?</kbd> | Open Keyboard Shortcuts Guide |

---

## 🚀 How to Run & Preview

You can open the application directly in any modern web browser:

1. Simply double-click or open [index.html](file:///Users/nikhilrathor89/.gemini/antigravity/scratch/image-gallery/index.html) in Chrome, Safari, Firefox, or Edge.
2. Alternatively, start a lightweight local web server:
   ```bash
   npx serve /Users/nikhilrathor89/.gemini/antigravity/scratch/image-gallery
   # or with Python
   python3 -m http.server --directory /Users/nikhilrathor89/.gemini/antigravity/scratch/image-gallery 8080
   ```

---

## 📂 Project Structure

```
/Users/nikhilrathor89/.gemini/antigravity/scratch/image-gallery/
├── index.html        # Semantic HTML5 layout and modal structure
├── styles.css        # Modern CSS design system, grid, hover animations, and lightbox styles
├── script.js         # JavaScript dataset, filtering, search, and lightbox controller
└── README.md         # Project documentation and guide
```
