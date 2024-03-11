import React, { useContext, useReducer } from "react";

type State = {
  canvasData: HTMLCanvasElement;
  boardId: number;
}[];

type Action = {
  type: "add";
  payload: {
    canvasData: HTMLCanvasElement;
  };
};

const initialState: State = [];

const CanvasBoardContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

export default function CanvasBoardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CanvasBoardContext.Provider value={{ state, dispatch }}>
      {children}
    </CanvasBoardContext.Provider>
  );
}

export const useCanvasBoard = () => useContext(CanvasBoardContext);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          boardId: state.length + 1,
          canvasData: action.payload.canvasData,
        },
      ];
    default:
      return state;
  }
};
