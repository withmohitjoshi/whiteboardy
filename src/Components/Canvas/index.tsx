import React, { useRef, useEffect } from "react";
import { CanvasPropsT } from "../../Context/CanvasBoard/types";
import { getCTX, hexaToRGB } from "../../Context/CanvasBoard/functions";
import { calculateCanvasDimensions } from "../../Helpers";

const Canvas = ({ style }: CanvasPropsT) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  let isDrawing = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const main = document.getElementById("main");

    if (canvas) {
      const ctx = getCTX(canvas);
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        contextRef.current = ctx;
      }
    }

    const observer = new ResizeObserver(() => {
      const { canvasWidth, canvasHeight } = calculateCanvasDimensions();
      const ctx = getCTX(canvas!);
      if (canvas && ctx) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
      }
    });

    if (main) observer.observe(main);
    return () => observer.disconnect();
  }, []);

  const startDrawing = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    if (contextRef.current) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      isDrawing = true;
    }
  };

  const drawPencil = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    if (contextRef.current) {
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };

  const finishDrawing = () => {
    if (contextRef.current) {
      contextRef.current.closePath();
    }
    isDrawing = false;
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={drawPencil}
      onMouseUp={finishDrawing}
      style={{
        ...style,
        backgroundColor: hexaToRGB("#ff0000"),
      }}
    />
  );
};

export default Canvas;
