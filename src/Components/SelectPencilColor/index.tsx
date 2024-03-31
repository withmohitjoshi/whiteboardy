import { useState } from "react";
import { useCanvasBoard } from "../../Context/CanvasBoard";
import { setCanvasPencilColor } from "../../Context/CanvasBoard/functions";

const colors = [
  "#ff0000",
  "#ffffff",
  "#000000",
  "#ffffff",
  "#008000",
  "#ffff00",
];

const SelectPencilColor = () => {
  const { activeBoard } = useCanvasBoard();
  const [color, setColor] = useState("#000000");
  return (
    <div className="flex flex-col gap-4">
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className="rounded-md w-6 h-6"
            style={{
              backgroundColor: color,
            }}
            onClick={() => {
              setColor(color);
              setCanvasPencilColor(color, activeBoard - 1);
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
            setColor(target.value);
            setCanvasPencilColor(color, activeBoard - 1);
          }}
        />
      </div>
    </div>
  );
};

export default SelectPencilColor;
