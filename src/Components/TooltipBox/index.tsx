import React, { useRef, useState } from "react";
import "./tooltip.scss";
import { useClickOutside } from "../../Hooks/useClickOutside";

type TooltipBoxT = {
  children: React.ReactNode;
  RenderComponent?: () => JSX.Element;
  position?: "top" | "right" | "bottom" | "left";
};

const TooltipBox: React.FC<TooltipBoxT> = ({
  children,
  RenderComponent = () => <></>,
  position = "right",
}) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useClickOutside({
    ref,
    onOutsideClick: () => {
      setShow(false);
    },
  });
  return (
    <div className="tooltip-container cursor-pointer" ref={ref}>
      <span
        className={`tooltip-text ${show ? "show" : ""}`}
        data-position={position}
      >
        <RenderComponent />
      </span>
      <span
        className="tooltip-trigger"
        onClick={() => setShow((prev) => !prev)}
      >
        {children}
      </span>
    </div>
  );
};

export default TooltipBox;
