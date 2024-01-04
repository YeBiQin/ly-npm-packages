import React, { AllHTMLAttributes, CSSProperties } from "react";
import classNames from "classnames";
import { theme, useStylesClassnames } from "laoye-react-component_design";

const testTheme = {
  "color.blue.10": "#d7ebff",
  "color.blue.20": "#abd6ff",
  "color.blue.30": "#80c0ff",
  "gap.small": "4px",
  "gap.medium": "8px",
  "gap.large": "12px",
};

type ThemeKeys = keyof typeof testTheme;

interface ElementProps extends AllHTMLAttributes<any> {
  css?: {
    [K in keyof CSSProperties]: CSSProperties[K] | ThemeKeys;
  };
}

export const Component = (props: ElementProps) => {
  const { css, className, children, ...others } = props;
  const stylesClassname = useStylesClassnames(css);
  return (
    <div className={classNames(stylesClassname, className)} {...others}>
      {children}
    </div>
  );
};

const Demo = () => {
  return (
    <Component
      css={{
        cursor: "",
      }}
    >
      测试内容
    </Component>
  );
};

export const Element = (props: ElementProps) => {
  const { css, className, children, ...others } = props;
  const stylesClassname = useStylesClassnames(css);
  return (
    <div className={classNames(stylesClassname, className)} {...others}>
      {children}
    </div>
  );
};
