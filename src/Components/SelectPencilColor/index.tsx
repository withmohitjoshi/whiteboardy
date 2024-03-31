import { useEffect, useState } from "react";
import { useCanvasBoard } from "../../Context/CanvasBoard";
import {
  getCanvasByIndex,
  getCTX,
  setCanvasPencilColor,
} from "../../Context/CanvasBoard/functions";
import { useIcons } from "../../Hooks/useIcons";

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
  const activeCanvas = getCanvasByIndex(activeBoard - 1);
  const [lineWidth, setLineWidth] = useState(1);
  const [color, setColor] = useState("#000000");
  const { LeftArrowIcon, RightArrowIcon } = useIcons();

  useEffect(() => {
    if (activeCanvas) {
      const ctx = getCTX(activeCanvas);
      if (ctx) {
        console.log("🚀 ~ useEffect ~ ctx:", ctx)
        setLineWidth(ctx.lineWidth);
      }
    }

    // return () => setLineWidth(1);
  }, [activeCanvas]);

  return (
    <div className="flex flex-col gap-4 items-center">
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
      <div className="flex items-center gap-1">
        <span
          onClick={() => {
            if (lineWidth > 1) {
              setLineWidth(lineWidth - 1);
            }
          }}
        >
          <LeftArrowIcon width={15} height={15} />
        </span>
        <span className="text-xs">{lineWidth}</span>
        <span
          onClick={() => {
            if (lineWidth >= 1 && lineWidth <= 10) {
              setLineWidth(lineWidth + 1);
            }
          }}
        >
          <RightArrowIcon width={15} height={15} />
        </span>
      </div>
    </div>
  );
};

export default SelectPencilColor;
