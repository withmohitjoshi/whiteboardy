import React from "react";

type CustomTooltipT = {
  children: React.ReactNode;
  
};
const CustomTooltip = ({ children }: CustomTooltipT) => {
  return <div role="tooltip" tooltipText="hyeeee" position={'right'}>{children}</div>;
};

export default CustomTooltip;
