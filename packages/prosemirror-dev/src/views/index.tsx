import React from "react";
import ToolTrigger from "./trigger";
import ToolContainer from "./container";
import { useToolStore } from "../..";

export const PMDeveloperTool = () => {
  const isOpen = useToolStore((state) => state.isOpen);
  return isOpen ? <ToolContainer /> : <ToolTrigger />;
};
