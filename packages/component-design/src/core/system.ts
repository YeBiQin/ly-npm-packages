import { AllHTMLAttributes, CSSProperties } from "react";
import { design } from "./design";

export interface ComponentAttributes extends AllHTMLAttributes<any> {
  css?: CSSProperties;
}

export const useStylesClassnames = (cssObject?: CSSProperties) => {
  return design.assembleClassNames(cssObject);
};
