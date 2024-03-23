import React from "react";
import "./tooltip.scss";

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
  return (
    <div className="tooltip-container">
      <span className="tooltip-text" data-position={position}>
        <RenderComponent />
      </span>
      <span className="tooltip-trigger">{children}</span>
    </div>
  );
};

export default TooltipBox;
