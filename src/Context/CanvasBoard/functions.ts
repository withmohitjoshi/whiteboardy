export const getCanvasByIndex = (index: number) => {
  const activeCanvas = document.getElementsByTagName("canvas")[index];
  if (activeCanvas) {
    return activeCanvas;
  }
  return null;
};
export const getCanvasBg = (index?: number) => {
  if (index) {
    const activeCanvas = document.getElementsByTagName("canvas")[index];
    if (activeCanvas) {
      return activeCanvas.style.backgroundColor;
    }
  }
  return "#ffffff";
};

export const setCanvasBg = (color: string, index: number) => {
  if (color) {
    const activeCanvas = getCanvasByIndex(index);
    if (activeCanvas) {
      activeCanvas.style.backgroundColor = color;
    }
  }
};
