import React, { memo } from "react";
import classnames from "classnames";
import { EditorState } from "prosemirror-state";

import styles from "./index.module.scss";
import BlockNode from "./BlockNode";
import NodeDetail from "./NodeDetail";
import { TabKeyEnum, toolStore, useToolStore } from "../../../../..";

type ContainerProps = {
  editorState: EditorState;
};
const StructurePanel = ({ editorState }: ContainerProps) => {
  // 打印当前所选择的节点
  const handleConsoleNode = () => {
    console.log("%c >>>>> 当前选择的节点信息", toolStore.getState().selectNode);
  };

  return (
    <div className={styles.container}>
      <div className={classnames(styles.col, styles.block_viewer)}>
        <div className={styles.heading}>文档结构</div>
        <div className={styles.content}>
          <BlockNode node={editorState.doc} pos={0} />
        </div>
      </div>

      <div className={classnames(styles.col, styles.block_details)}>
        <div className={styles.heading}>
          <span>节点信息</span>
          <button onClick={handleConsoleNode}>打印数据</button>
        </div>
        <div className={styles.content}>
          <NodeDetail />
        </div>
      </div>
    </div>
  );
};

export const TabStructure = () => {
  const isActive = useToolStore((state) => state.activeTab === TabKeyEnum.Structure);
  const editorState = useToolStore((state) => state.editorState);

  const isVisible = isActive && editorState;
  return isVisible ? <StructurePanel editorState={editorState} /> : null;
};
