import React, { memo } from "react";
import { Node } from "prosemirror-model";

import styles from "./index.module.scss";
import BlockNode from "./BlockNode";

type ContentsProps = {
  pos: number;
  node: Node;
};
const BlockContents = ({ pos, node }: ContentsProps) => {
  let offsetPos = pos;

  return (
    <div className={styles.node_contents}>
      {node.content.content.map((childNode: Node, index: number) => {
        const from = offsetPos;
        offsetPos += childNode.nodeSize;
        return <BlockNode key={index} pos={from} node={childNode} />;
      })}
    </div>
  );
};

export default memo(BlockContents);
