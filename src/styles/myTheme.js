const color = {
  white: "#ffffff",
  contrast: "#f8f8f8",
  "blue-1": "#003C74",
  "blue-2": "#1E88CB",
  "blue-3": "#2064D1",
  "blue-4": "#151070",
  "blue-border": "#0C206B",
  "portrait-1": "#FDF3FA",
  "portrait-2": "#FAD4EC",
  "portrait-3": "#FDE2CE",
  hover: "#509EB4",
  button: "#F7842F",
  "button-hover": "#5EAAA5",
  background: "#F9A86D",
  underscore: "#dce3f5",
}

const typography = {
  "text-p": "22px",
  "text-p2": "18px",
  "text-p3": "12px",
  "text-h1": "68px",
  "text-h2": "56px",
  "text-h3": "34px",
  "text-h4": "28px",
}

const size = {
  xs: `320px`,
  sm: `768px`,
  lg: `1200px`,
}
const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
}

export default { size, device, color, typography }
