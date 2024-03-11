import { useIcons } from '../../Hooks/useIcons';

export default function Header({ canvasArray, currentBoard, setCurrentBoard }: any) {
  const { FirstBoardIcon, PrevBoardIcon, NextBoardIcon, LastBoardIcon } = useIcons();

  const handleFirst = () => setCurrentBoard(1);
  const handlePrev = () => currentBoard > 1 && setCurrentBoard(currentBoard - 1);
  const handleNext = () => currentBoard < canvasArray.length && setCurrentBoard(currentBoard + 1);
  const handleLast = () => setCurrentBoard(canvasArray.length);

  return (
    <header id='header'>
      <div id='brand'>white boardy</div>
      <div className='flex items-center gap-2 text-gray-700  [&>button]:cursor-pointer [&>button:disabled]:text-gray-400 [&>button:disabled]:cursor-not-allowed'>
        <button onClick={handleFirst} disabled={currentBoard <= 1}>
          <FirstBoardIcon />
        </button>
        <button onClick={handlePrev} disabled={currentBoard <= 1}>
          <PrevBoardIcon />
        </button>
        <div className='border-x-[1px] border-gray-300 px-4'>
          Board{' '}
          <input
            type='number'
            className='max-w-16 text-center rounded-s-sm'
            min={1}
            value={currentBoard}
            onChange={({ target }) => {
              const value = parseInt(target.value);
              if (value > 0 && value <= canvasArray.length) {
                setCurrentBoard(value);
              } else {
                setCurrentBoard(1);
              }
            }}
          />{' '}
          of {canvasArray.length}
        </div>
        <button onClick={handleNext} disabled={currentBoard >= canvasArray.length}>
          <NextBoardIcon />
        </button>
        <button onClick={handleLast} disabled={currentBoard >= canvasArray.length}>
          <LastBoardIcon />
        </button>
      </div>
    </header>
  );
}
