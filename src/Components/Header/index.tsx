import { useIcons } from '../../Hooks/useIcons';

export default function Header({
  activeBoard,
  setActiveBoard,
  boardState,
}: any) {
  const { FirstBoardIcon, PrevBoardIcon, NextBoardIcon, LastBoardIcon } =
    useIcons();

  const handleFirstBoard = () => {
    setActiveBoard(0);
  };
  const handlePrevBoard = () => {
    setActiveBoard((prev: number) => prev - 1);
  };
  const handleNextBoard = () => {
    setActiveBoard((prev: number) => prev + 1);
  };
  const handleLastBoard = () => {
    setActiveBoard(boardState?.length - 1);
  };

  return (
    <header id="header">
      <div id="brand">white boardy</div>
      <div className="flex items-center gap-2 text-gray-700  [&>span]:cursor-pointer">
        <span onClick={handleFirstBoard}>
          <FirstBoardIcon />
        </span>
        <span onClick={handlePrevBoard}>
          <PrevBoardIcon />
        </span>
<<<<<<< HEAD
        <div className="border-x-[1px] border-gray-300 px-4">
          Board{" "}
          <input
            type="number"
            className="max-w-16 text-center rounded-s-sm"
            min={1}
            value={activeBoard + 1}
            onChange={({ target }) => {
              const value = parseInt(target.value);
              if (value > boardState?.length || value < 1) {
                return;
              }
              setActiveBoard(value);
            }}
          />{" "}
          of {boardState.length}
=======
        <div className='border-x-[1px] border-gray-300 px-4'>
          Board <input type='number' className='max-w-16 text-center rounded-s-sm' min={1} defaultValue={1} /> of 1
>>>>>>> d8fe19d618a045874c38c9de5383494657b89759
        </div>
        <span onClick={handleNextBoard}>
          <NextBoardIcon />
        </span>
        <span onClick={handleLastBoard}>
          <LastBoardIcon />
        </span>
      </div>
    </header>
  );
}
