import { useIcons } from "../../Hooks/useIcons";
import Canvas from "../Canvas";

const Sidebar = ({ setBoardState,setActiveBoard }: any) => {
  const {
    CursorIcon,
    BoardLayerIcon,
    ColorSelectIcon,
    BoardColorSelectIcon,
    RubberIcon,
    ShapesIcon,
    TextIcon,
    ImageIcon,
    TrashIcon,
    RedoIcon,
    UndoIcon,
    PencilIcon,
  } = useIcons();
  return (
    <aside id="sidebar">
      <span title="Cursor">
        <CursorIcon />
      </span>
      <span
        title="New Board"
        onClick={() => {
          setBoardState((prev: any) => [...prev, Canvas]);
          // setActiveBoard((prev:any) => prev.length + 1);
        }}
      >
        <BoardLayerIcon />
      </span>
      <span title="Select pencil color">
        <ColorSelectIcon />
      </span>
      <span title="Select board color">
        <BoardColorSelectIcon />
      </span>
      <span title="Pencil">
        <PencilIcon />
      </span>
      <span title="Rbber">
        <RubberIcon />
      </span>
      <span title="Shapes">
        <ShapesIcon />
      </span>
      <span title="Text">
        <TextIcon />
      </span>
      <span title="Upload Image">
        <ImageIcon />
      </span>
      <span title="Undo">
        <UndoIcon />
      </span>
      <span title="Redo">
        <RedoIcon />
      </span>
      <span title="Clear Board">
        <TrashIcon />
      </span>
    </aside>
  );
};

export default Sidebar;
