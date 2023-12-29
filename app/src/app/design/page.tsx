"use client";

import classNames from "classnames";
import {
  design,
  ComponentAttributes,
  useStylesClassnames,
} from "laoye-react-component_design";
import { useState } from "react";

interface ElementProps extends ComponentAttributes {}

const Element = (props: ElementProps) => {
  const { css, className, children, ...others } = props;
  const stylesClassname = useStylesClassnames(css);
  return (
    <div className={classNames(stylesClassname, className)} {...others}>
      {children}
    </div>
  );
};

const UserItem = () => {
  const [active, setActive] = useState(false);

  const handleClickEvt = () => setActive(!active);

  return (
    <Element
      css={{
        gap: design.gap.medium,
        color: design.color.gray[90],
        cursor: "pointer",
        display: "flex",
        padding: design.padding.medium,
        borderRadius: design.radius.medium,
        backgroundColor: active ? design.color.blue[5] : design.color.gray[10],
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: active ? design.color.blue[30] : "transparent",
      }}
      onClick={handleClickEvt}
    >
      <Element
        css={{
          color: "white",
          width: "32px",
          height: "32px",
          display: "flex",
          fontSize: "12px",
          alignItems: "center",
          borderRadius: "100%",
          justifyContent: "center",
          backgroundColor: design.color.blue[60],
        }}
      >
        组件
      </Element>

      <Element css={{ gap: design.gap.medium, display: "flex", alignItems: "center" }}>
        BiQin Ye
      </Element>
    </Element>
  );
};

const PerformanceStylePage = () => {
  return (
    <div
      style={{
        gap: "12px",
        height: "100vh",
        padding: "12px",
        display: "flex",
        overflowX: "hidden",
        flexDirection: "column",
      }}
    >
      <UserItem />
    </div>
  );
};

export default PerformanceStylePage;
