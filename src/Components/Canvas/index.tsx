import React, { useRef, useEffect } from 'react';
import { CanvasPropsT } from '../../Context/CanvasBoard/types';
import { getCTX, hexaToRGB } from '../../Context/CanvasBoard/functions';

const Canvas = ({ style }: CanvasPropsT) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  let isDrawing = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = document.getElementById('app');
    const main = document.getElementById('main');
    const header = document.getElementById('header');

    const observer = new ResizeObserver(() => {
      if (app && main && header) {
        const sidebarWidth = (main.children[0] as HTMLElement).offsetWidth;
        const mainGap = parseInt(getComputedStyle(main)['gap']);
        const appGap = parseInt(getComputedStyle(app)['gap']);
        const canvasWidth = main.offsetWidth - sidebarWidth - mainGap;
        const canvasHeight = main.offsetHeight - header.offsetHeight - appGap;
        if (canvas) {
          // const ctx = getCTX(canvas);
          // const imageData = ctx!.getImageData(0, 0, canvas.width, canvas.height);
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
          // ctx!.putImageData(imageData, 0, 0);
        }
      }
    });

    if (canvas) {
      const ctx = getCTX(canvas);
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        contextRef.current = ctx;
      }
    }

    if (main) observer.observe(main);
    return () => observer.disconnect();
  }, []);

  const startDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
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
        backgroundColor: hexaToRGB('#ffffff'),
      }}
    />
  );
};

export default Canvas;
