export const readFile = (
  file: Blob,
  readAs: "arraybuffer" | "text" | "dataURL" = "dataURL"
) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve(event.target?.result);
    };

    reader.onerror = (event) => {
      reject(event.target?.error);
    };

    switch (readAs) {
      case "arraybuffer":
        reader.readAsArrayBuffer(file);
        break;
      case "dataURL":
        reader.readAsDataURL(file);
        break;
      case "text":
        reader.readAsText(file);
        break;
      default:
        break;
    }
  });
};

export const calculateCanvasDimensions = () => {
  const app = document.getElementById("app")!;
  const main = document.getElementById("main")!;
  const header = document.getElementById("header")!;
  const sidebarWidth = (main.children[0] as HTMLElement).offsetWidth;
  const mainGap = parseInt(getComputedStyle(main)["gap"]);
  const appGap = parseInt(getComputedStyle(app)["gap"]);
  const verticalPadding = parseInt(getComputedStyle(app)["paddingInline"]);
  const canvasWidth = main.offsetWidth - sidebarWidth - mainGap;
  const canvasHeight =
    app.offsetHeight - header.offsetHeight - appGap - verticalPadding * 2;
  return { canvasWidth, canvasHeight };
};
