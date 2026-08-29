# ⚡ NEO-CALC Pro - Modern Glassmorphism Calculator

An ultra-modern, responsive, and tactile web calculator application built with vanilla **HTML5**, **CSS3 (Glassmorphism, CSS Custom Properties, Flexbox & Grid)**, and modern **JavaScript (ES6+)** with **Web Audio API** tactile sound synthesis.

Developed for the **CodeAlpha Web Development Internship — Task 2: Build a Calculator**.

---

## ✨ Key Features

### 1. 🧮 Comprehensive Calculation Modes
- **Standard Mode**: Fast everyday arithmetic ($+$, $-$, $\times$, $\div$), percentage ($\%$), negation ($\pm$), decimal handling, and real-time live result evaluation.
- **Scientific Mode**: Advanced mathematical functions including:
  - Trigonometric: $\sin$, $\cos$, $\tan$ with instant **DEG / RAD** angle toggle.
  - Logarithmic: $\log_{10}$, $\ln$ (natural log).
  - Powers & Roots: $\sqrt{x}$, $x^2$, $x^y$, $1/x$, and factorial ($n!$).
  - Constants: $\pi$ (Pi) and $e$ (Euler's Number).
  - Multi-level parentheses grouping: `(` and `)`.
- **Unit Converter Suite**: Instant live unit conversion across:
  - 📏 **Length**: Meters, Kilometers, Centimeters, Millimeters, Miles, Yards, Feet, Inches.
  - ⚖️ **Weight**: Kilograms, Grams, Milligrams, Pounds, Ounces, Metric Tonnes.
  - 🌡️ **Temperature**: Celsius (°C), Fahrenheit (°F), Kelvin (K).
  - 💾 **Data Storage**: Bytes, KB, MB, GB, TB.

### 2. 🎨 4 Next-Gen Themes (Glassmorphism & OLED)
- 🌌 **Cyber Dark**: High-contrast dark navy with electric cyan & neon blue glow.
- 🔮 **Aurora Glass**: Deep purple-indigo with magenta neon and frosted backdrop blur.
- ⚡ **Midnight OLED**: Pitch-black theme with high-visibility warm amber accents.
- ❄️ **Platinum Light**: Ultra-clean frosted glass with crisp sapphire blue accents.

### 3. 🔊 Tactile Sound Synthesis & Haptics
- Built-in **Web Audio API synthesizer** generating subtle tactile audio blips on every keypress.
- Dedicated sound mute/unmute toggle with preference memory.

### 4. 📜 Interactive History Tape (Calculation Journal)
- Side drawer displaying calculation history with timestamps.
- Click any prior calculation to immediately insert the result into the active input screen.
- Clear history action with one-click cleanup and `localStorage` persistence.

### 5. 💾 Memory Register (M-Keys)
- Full standard memory bank: **MC** (Memory Clear), **MR** (Memory Recall), **M+** (Memory Add), **M-** (Memory Subtract), **MS** (Memory Store) with a visual indicator badge.

### 6. 📋 Instant Clipboard Copy & Toasts
- One-click copy button to grab computed figures directly to the system clipboard with smooth animated toast feedback.

---

## ⌨️ Keyboard Shortcuts Reference

| Key | Function |
| :--- | :--- |
| <kbd>0</kbd> – <kbd>9</kbd> | Number input |
| <kbd>+</kbd>, <kbd>-</kbd>, <kbd>*</kbd>, <kbd>/</kbd> | Basic arithmetic operators |
| <kbd>Enter</kbd> or <kbd>=</kbd> | Compute result |
| <kbd>Backspace</kbd> | Delete last character (⌫) |
| <kbd>Escape</kbd> or <kbd>C</kbd> | Clear All (AC) |
| <kbd>%</kbd> | Calculate percentage |
| <kbd>(</kbd> <kbd>)</kbd> | Parentheses grouping |
| <kbd>^</kbd> | Exponent / Power ($x^y$) |
| <kbd>S</kbd> | Sine ($\sin$) |
| <kbd>O</kbd> | Cosine ($\cos$) |
| <kbd>T</kbd> | Tangent ($\tan$) |
| <kbd>R</kbd> | Square Root ($\sqrt{x}$) |
| <kbd>P</kbd> | Constant $\pi$ |
| <kbd>E</kbd> | Constant $e$ |
| <kbd>H</kbd> | Toggle Calculation Tape / History drawer |

---

## 🚀 How to Run & Preview

Open `index.html` directly in any modern browser:
```bash
# Preview directly using npx serve or python
npx serve "Task 2 : Calculator"
# or
python3 -m http.server --directory "Task 2 : Calculator" 8080
```

---

## 📂 Project Structure

```
Task 2 : Calculator/
├── index.html        # Semantic HTML5 UI layout, modals, and screen
├── styles.css        # Glassmorphic CSS tokens, themes, and animations
├── script.js         # Math evaluation engine, Web Audio synth, unit converter
└── README.md         # Detailed task documentation
```
