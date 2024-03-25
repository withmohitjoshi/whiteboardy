import React, { useContext, useState } from "react";
import { Canvas } from "../../Components";
import { CanvasArrayT, CanvasBoardContextT } from "./types";

const initialState: CanvasBoardContextT = {
  activeBoard: 1,
  setActiveBoard: () => {},
  canvasArray: [],
  setCanvasArray: () => {},
};
const CanvasBoard = React.createContext<CanvasBoardContextT>(initialState);

export default function CanvasBoardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeBoard, setActiveBoard] = useState<number>(1);
  const [canvasArray, setCanvasArray] = useState<CanvasArrayT>([Canvas]);

  return (
    <CanvasBoard.Provider
      value={{
        activeBoard,
        setActiveBoard,
        canvasArray,
        setCanvasArray,
      }}
    >
      {children}
    </CanvasBoard.Provider>
  );
}

export const useCanvasBoard = () => useContext(CanvasBoard);
