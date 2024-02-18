import { useIcons } from "../../Hooks/useIcons";

export default function Header() {
  const { FirstBoardIcon, PrevBoardIcon, NextBoardIcon, LastBoardIcon } =
    useIcons();
  return (
    <header id="header">
      <div id="brand">white boardy</div>
      <div className="flex items-center gap-2 text-gray-700  [&>span]:cursor-pointer">
        <span>
          <FirstBoardIcon />
        </span>
        <span>
          <PrevBoardIcon />
        </span>
        <div className="border-x-[1px] border-gray-300 px-4">
          Board{" "}
          <input
            type="number"
            className="max-w-16 text-center rounded-s-sm"
            min={1}
            defaultValue={1}
          />{" "}
          of 1
        </div>
        <span>
          <NextBoardIcon />
        </span>
        <span>
          <LastBoardIcon />
        </span>
      </div>
    </header>
  );
}
