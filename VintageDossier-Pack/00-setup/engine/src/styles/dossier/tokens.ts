// Vintage Dossier - design tokens. A new theme = a new token object (swap colors/fonts, keep components).
import "@fontsource/courier-prime/400.css";
import "@fontsource/courier-prime/700.css";
import "@fontsource/libre-baskerville/400.css";
import "@fontsource/libre-baskerville/700.css";

export const T = {
  color: {
    desk: "#15120f",
    paper: "#e6dcc6",
    paperEdge: "#f1e9d6",
    ink: "#1d1914",
    inkSoft: "rgba(40,31,22,0.78)",
    tape: "#0e0c0a", // redaction-tape label bar
    tapeText: "#efe6d2",
    red: "#b8262b", // the ONLY accent: pen circles, strikes, arrows, strings, stamps, punctuation
    title: "#efe6d2",
  },
  font: {
    mono: "'Courier Prime', 'Courier New', monospace",
    serif: "'Libre Baskerville', Georgia, serif",
  },
  shape: { printBorder: 0.045, shadow: "0 18px 40px rgba(0,0,0,0.55), 0 3px 8px rgba(0,0,0,0.5)", pin: 9 },
  motion: {
    printIn: { damping: 15, stiffness: 140, mass: 0.9 }, // slide-in settle
    snappy: { damping: 20, stiffness: 260, mass: 0.6 },
    push: 0.045, // scene push-in amount (scale) over a scene
  },
};
