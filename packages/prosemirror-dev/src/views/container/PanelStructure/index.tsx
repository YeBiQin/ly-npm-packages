import React from "react";
import classnames from "classnames";
import { EditorState } from "prosemirror-state";

import styles from "./index.module.scss";
import BlockNode from "./BlockNode";
import NodeDetail from "./NodeDetail";
import { Heading, TabKeyEnum, toolStore, useToolStore } from "../../../..";

type ContainerProps = {
  editorState: EditorState;
};
const StructurePanel = ({ editorState }: ContainerProps) => {
  const selectNode = useToolStore((state) => state.selectNode);

  return (
    <div className={styles.container}>
      <div className={classnames(styles.col, styles.block_viewer)}>
        <div className={styles.header}>
          <Heading>文档结构</Heading>
        </div>

        <div className={styles.content}>
          <BlockNode node={editorState.doc} pos={0} />
        </div>
      </div>

      <div className={classnames(styles.col, styles.block_details)}>
        <div className={styles.header}>
          <Heading output={selectNode}>节点信息</Heading>
        </div>

        <div className={styles.content}>
          <NodeDetail />
        </div>
      </div>
    </div>
  );
};

export const PanelStructure = () => {
  const isActive = useToolStore((state) => state.activeTab === TabKeyEnum.Structure);
  const editorState = useToolStore((state) => state.editorState);

  const isVisible = isActive && editorState;
  return isVisible ? <StructurePanel editorState={editorState} /> : null;
};
