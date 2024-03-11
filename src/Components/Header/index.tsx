import { useCanvasBoard } from "../../Context/CanvasBoard";
import { useIcons } from "../../Hooks/useIcons";

export default function Header() {
  const { canvasArray, activeBoard, setActiveBoard } = useCanvasBoard();
  const { FirstBoardIcon, PrevBoardIcon, NextBoardIcon, LastBoardIcon } =
    useIcons();

  const handleFirst = () => setActiveBoard(1);
  const handlePrev = () => activeBoard > 1 && setActiveBoard(activeBoard - 1);
  const handleNext = () =>
    activeBoard < canvasArray.length && setActiveBoard(activeBoard + 1);
  const handleLast = () => setActiveBoard(canvasArray.length);

  return (
    <header id="header">
      <div id="brand">white boardy</div>
      <div className="flex items-center gap-2 text-gray-700  [&>button]:cursor-pointer [&>button:disabled]:text-gray-400 [&>button:disabled]:cursor-not-allowed">
        <button onClick={handleFirst} disabled={activeBoard <= 1}>
          <FirstBoardIcon />
        </button>
        <button onClick={handlePrev} disabled={activeBoard <= 1}>
          <PrevBoardIcon />
        </button>
        <div className="border-x-[1px] border-gray-300 px-4">
          Board{" "}
          <input
            type="number"
            className="max-w-16 text-center rounded-s-sm"
            min={1}
            value={activeBoard}
            onChange={({ target }) => {
              const value = parseInt(target.value);
              if (value > 0 && value <= canvasArray.length) {
                setActiveBoard(value);
              } else {
                setActiveBoard(1);
              }
            }}
          />{" "}
          of {canvasArray.length}
        </div>
        <button
          onClick={handleNext}
          disabled={activeBoard >= canvasArray.length}
        >
          <NextBoardIcon />
        </button>
        <button
          onClick={handleLast}
          disabled={activeBoard >= canvasArray.length}
        >
          <LastBoardIcon />
        </button>
      </div>
    </header>
  );
}
