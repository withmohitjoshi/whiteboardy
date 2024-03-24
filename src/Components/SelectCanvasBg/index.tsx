import { useEffect, useRef } from "react";
import { useCanvasBoard } from "../../Context/CanvasBoard";
import { getCanvasBg, setCanvasBg } from "../../Context/CanvasBoard/functions";

const colors = ["#ff0000", "#ffffff", "#000000", "#008000", "#ffff00"];

const SelectCanvasBg = () => {
  const { activeBoard } = useCanvasBoard();
  const colorPickerRef = useRef<HTMLInputElement | null>(null);
  const canvasColor = getCanvasBg(activeBoard - 1);

  useEffect(() => {
    if (colorPickerRef.current) colorPickerRef.current.value = canvasColor;
  }, [canvasColor]);

  return (
    <div className="flex flex-col gap-4">
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className="rounded-md w-6 h-6"
            onClick={() => setCanvasBg(color, activeBoard - 1)}
            style={{
              backgroundColor: color,
            }}
          />
        );
      })}
      <div>
        <input
          ref={colorPickerRef}
          type="color"
          className="w-6 h-6 p-1"
          onChange={({ target }) => setCanvasBg(target.value, activeBoard - 1)}
        />
      </div>
    </div>
  );
};
export default SelectCanvasBg;
