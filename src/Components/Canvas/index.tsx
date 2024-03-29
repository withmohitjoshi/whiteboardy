import React, { useRef, useEffect } from "react";
import { CanvasPropsT } from "../../Context/CanvasBoard/types";
import { getCTX, hexaToRGB } from "../../Context/CanvasBoard/functions";

const Canvas = ({ style }: CanvasPropsT) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  let isDrawing = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = document.getElementById("app");
    const main = document.getElementById("main");
    const header = document.getElementById("header");

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
      if (app && main && header) {
        const sidebarWidth = (main.children[0] as HTMLElement).offsetWidth;
        const mainGap = parseInt(getComputedStyle(main)["gap"]);
        const appGap = parseInt(getComputedStyle(app)["gap"]);
        const verticalPadding = parseInt(
          getComputedStyle(app)["paddingInline"]
        );
        const canvasWidth = main.offsetWidth - sidebarWidth - mainGap;
        const canvasHeight =
          app.offsetHeight - header.offsetHeight - appGap - verticalPadding * 2;
        if (canvas) {
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
        }
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
