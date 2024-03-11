export type CanvasPropsT = {
  style: React.CSSProperties;
};

export type CanvasArrayT = ((props: CanvasPropsT) => JSX.Element)[];

export type CanvasBoardContextT = {
  activeBoard: number;
  setActiveBoard: React.Dispatch<React.SetStateAction<number>>;
  canvasArray: CanvasArrayT;
  setCanvasArray: React.Dispatch<React.SetStateAction<CanvasArrayT>>;
};
