export const ReadFile = (
  file: Blob,
  readAs: "arraybuffer" | "text" | "dataURL" = "dataURL",
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
