import React, { memo } from "react";
import { JSONTree } from "react-json-tree";

import { jsonTheme, useToolStore } from "../../../..";

const NodeDetail = () => {
  const selectNode = useToolStore((state) => state.selectNode);
  return (
    <JSONTree
      hideRoot
      data={selectNode?.toJSON() || {}}
      theme={jsonTheme}
      invertTheme={false}
      shouldExpandNodeInitially={() => true}
    />
  );
};

export default memo(NodeDetail);
