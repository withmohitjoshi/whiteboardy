import { useState } from "react";
import { useCanvasBoard } from "../../Context/CanvasBoard";
import {
  getCanvasBg,
  rgbToHexa,
  setCanvasBg,
} from "../../Context/CanvasBoard/functions";

const colors = ["#ff0000", "#ffffff", "#000000", "#008000", "#ffff00"];

const SelectCanvasBg = () => {
  const { activeBoard } = useCanvasBoard();
  const [color, setColor] = useState(rgbToHexa(getCanvasBg(activeBoard - 1)));

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
    </div>
  );
};
export default SelectCanvasBg;
