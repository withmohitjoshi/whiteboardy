import { useIcons } from "../../Hooks/useIcons";

export default function Header() {
  const { PrevBoardIcon, LastBoardIcon, NextBoardIcon, EndBoardIcon } =
    useIcons();
  return (
    <div className="flex items-center gap-4">
      <div id={"brand"} className="text-slate-600 text-2xl capitalize inline-block">
        <p>white boardy</p>
      </div>
      <div className="flex items-center gap-2">
        <span>
          <LastBoardIcon />
        </span>
        <span>
          <PrevBoardIcon />
        </span>
        <span className="text-slate-600">
          Board{" "}
          <input
            inputMode="numeric"
            type="number"
            className="max-w-16 rounded-sm"
            min={1}
          />{" "}
          Of 1
        </span>
        <span>
          <NextBoardIcon />
        </span>
        <span>
          <EndBoardIcon />
        </span>
      </div>
    </div>
  );
}
