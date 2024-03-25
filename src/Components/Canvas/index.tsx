import React, { useRef, useEffect } from "react";
import { CanvasPropsT } from "../../Context/CanvasBoard/types";
import { hexaToRGB } from "../../Context/CanvasBoard/functions";

const Canvas = ({ style }: CanvasPropsT) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  let isDrawing = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (canvas) {
          canvas.width = width;
          canvas.height = height;
        }
      }
    });

    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.lineWidth = 5;
        contextRef.current = ctx;
      }
      const canvasContainer = document.querySelector(".canvas-container");
      if (canvasContainer) {
        observer.observe(canvasContainer);
      }
    }
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
        backgroundColor: hexaToRGB("#ffffff"),
      }}
    />
  );
};

export default Canvas;
