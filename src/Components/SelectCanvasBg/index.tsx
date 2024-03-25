import { useRef, useState } from "react";
import { useCanvasBoard } from "../../Context/CanvasBoard";
import {
  getCanvasBg,
  getCanvasByIndex,
  getCTX,
  rgbToHexa,
  setCanvasBg,
} from "../../Context/CanvasBoard/functions";
import { useIcons } from "../../Hooks/useIcons";

const colors = ["#ff0000", "#ffffff", "#000000", "#008000", "#ffff00"];

const SelectCanvasBg = () => {
  const selectImageRef = useRef<HTMLInputElement | null>(null);
  const { UploadIcon } = useIcons();
  const { activeBoard } = useCanvasBoard();
  const [color, setColor] = useState(rgbToHexa(getCanvasBg(activeBoard - 1)));

  const setImageCanvasBg = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (
      target.files &&
      target.files.length > 0 &&
      /^image\//.test(target.files[0].type)
    ) {
      const selectedFile = target.files[0];
      const image = new Image();
      const canvas = getCanvasByIndex(activeBoard - 1);
      if (canvas) {
        const ctx = getCTX(canvas);
        if (ctx) {
          image.src = URL.createObjectURL(selectedFile);
          image.onload = () => ctx?.drawImage(image, 10, 10);
        }
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className="rounded-md w-6 h-6"
            onClick={() => {
              setCanvasBg(color, activeBoard - 1);
              setColor(color);
            }}
            style={{
              backgroundColor: color,
            }}
          />
        );
      })}
      <div>
        <input
          type="color"
          className="w-6 h-6 p-1"
          value={color}
          onChange={({ target }) => {
            setCanvasBg(color, activeBoard - 1);
            setColor(target.value);
          }}
        />
      </div>
      <div
        title="Select image as background"
        onClick={() => {
          selectImageRef.current?.click();
        }}
      >
        <UploadIcon />
        <input
          ref={selectImageRef}
          type="file"
          style={{ display: "none" }}
          accept="image/*"
          multiple={false}
          onChange={setImageCanvasBg}
        />
      </div>
    </div>
  );
};
export default SelectCanvasBg;
