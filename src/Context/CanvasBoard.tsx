import React, { useContext } from 'react';

const CanvasBoard = React.createContext(null);

export default function CanvasBoardProvider({ children }: { children: React.ReactNode }) {
  return <CanvasBoard.Provider value={null}>{children}</CanvasBoard.Provider>;
}

export const useCanvasBoard = () => useContext(CanvasBoard);
