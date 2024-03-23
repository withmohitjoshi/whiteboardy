import { useCanvasBoard } from "../../Context/CanvasBoard";
import { useIcons } from "../../Hooks/useIcons";
import Canvas from "../Canvas";
import SelectColor from "../SelectColor";
import TooltipBox from "../TooltipBox";

const Sidebar = () => {
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
  const { setCanvasArray } = useCanvasBoard();
  return (
    <aside id="sidebar">
      <span title="Cursor">
        <CursorIcon />
      </span>
      <span
        title="New Board"
        onClick={() => setCanvasArray((prev) => [...prev, Canvas])}
      >
        <BoardLayerIcon />
      </span>
      <span title="Select pencil color">
        <ColorSelectIcon />
      </span>
      <TooltipBox RenderComponent={SelectColor}>
        <span title="Select board color">
          <BoardColorSelectIcon />
        </span>
      </TooltipBox>
      <span title="Pencil">
        <PencilIcon />
      </span>
      <span title="Rubber">
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
