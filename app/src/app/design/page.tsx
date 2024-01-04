"use client";

import classNames from "classnames";
import {
  theme,
  ComponentAttributes,
  useStylesClassnames,
} from "laoye-react-component_design";
import { Element } from "laoye-react-component";
import { AllHTMLAttributes, CSSProperties, useState } from "react";

const UserItem = () => {
  const [active, setActive] = useState(false);

  const handleClickEvt = () => setActive(!active);

  return (
    <Element
      css={{
        gap: theme.gap.medium,
        color: theme.color.gray[90],
        cursor: "pointer",
        display: "flex",
        padding: theme.padding.medium,
        borderRadius: theme.radius.medium,
        backgroundColor: active ? theme.color.blue[5] : theme.color.gray[10],
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: active ? theme.color.blue[30] : "transparent",
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
          backgroundColor: theme.color.blue[60],
        }}
      >
        组件
      </Element>

      <Element css={{ gap: theme.gap.medium, display: "flex", alignItems: "center" }}>
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
