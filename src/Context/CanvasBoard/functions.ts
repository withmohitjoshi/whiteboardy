export const getCanvasByIndex = (index: number) => {
  const activeCanvas = document.getElementsByTagName("canvas").item(index);
  if (activeCanvas) {
    return activeCanvas;
  }
  return null;
};
export const getCanvasBg = (index?: number) => {
  if (typeof index === "number") {
    const activeCanvas = document.getElementsByTagName("canvas").item(index);
    if (activeCanvas) {
      return activeCanvas.style.backgroundColor;
    }
  }
  return hexaToRGB("#ffffff");
};

export const setCanvasBg = (color: string, index: number) => {
  if (color) {
    const activeCanvas = getCanvasByIndex(index);
    if (activeCanvas) {
      activeCanvas.style.backgroundColor = color;
    }
  }
};

export const hexaToRGB = (hex: string = "") => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `rgb(${parseInt(result[1], 16)}, ${parseInt(
      result[2],
      16
    )}, ${parseInt(result[3], 16)})`;
  } else {
    return "rgb(255, 255, 255)";
  }
};

export const rgbToHexa = (rgb: string) => {
  const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
  const match = rgbRegex.exec(rgb);
  if (match) {
    const [r, g, b] = match.slice(1); // Extract red, green, blue components
    const componentToHex = (c: number) => c.toString(16).padStart(2, "0");
    return `#${componentToHex(parseInt(r, 10))}${componentToHex(
      parseInt(g, 10)
    )}${componentToHex(parseInt(b, 10))}`;
  } else {
    return "#ffffff";
  }
};

export const clearCanvas = (index: number) => {
  const canvas = getCanvasByIndex(index);
  if (canvas) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
};
