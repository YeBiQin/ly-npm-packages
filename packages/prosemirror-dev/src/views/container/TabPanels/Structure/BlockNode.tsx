import React, { memo } from "react";
import { Node } from "prosemirror-model";

import styles from "./index.module.scss";
import BlockContents from "./BlockContents";
import { toolStore, useToolStore } from "../../../../..";

type BlockNodeProps = {
  node: Node;
  pos: number;
};
const BlockNode = ({ node, pos }: BlockNodeProps) => {
  const isInline = node.isInline || node.isText || node.isLeaf;
  const from = isInline ? pos + 1 : pos;
  const to = from + node.nodeSize;

  const selectNode = useToolStore((state) => state.selectNode);

  const colorTheme = toolStore.getState().getNodeTheme(node.type.name);

  const handleClickEvt = () => {
    toolStore.setState({ selectNode: node });
  };

  return (
    <div className={styles.block_node}>
      <div
        className={styles.node_info}
        data-active={node === selectNode}
        style={{ backgroundColor: colorTheme }}
        onClick={handleClickEvt}
      >
        <div className={styles.node_info__inner}>
          <div className={styles.node_pos}>{from}</div>
          <div className={styles.node_type}>{node.type.name}</div>
          <div className={styles.node_pos}>{to}</div>
        </div>
      </div>

      <BlockContents pos={from} node={node} />
    </div>
  );
};

export default BlockNode;
