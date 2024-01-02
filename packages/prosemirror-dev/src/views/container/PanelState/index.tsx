import React from "react";
import { Heading, jsonTheme, useToolStore } from "../../../..";
import styles from "./index.module.scss";
import { JSONTree } from "react-json-tree";

export const PanelState = () => {
  const editorState = useToolStore((state) => state.editorState);

  if (!editorState) return null;

  const { doc, selection } = editorState;

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.section}>
          <Heading>视图状态</Heading>
          <div className={styles.content}>
            <JSONTree
              hideRoot
              data={doc.toJSON()}
              theme={jsonTheme}
              invertTheme={false}
            />
          </div>
        </div>
      </div>

      <div className={styles.container_right}>
        <div className={styles.section}>
          <Heading output={selection.toJSON()}>选区信息</Heading>
          <div className={styles.content}>
            <JSONTree
              hideRoot
              data={selection.toJSON()}
              theme={jsonTheme}
              invertTheme={false}
            />
          </div>
        </div>

        <div className={styles.section}>
          <Heading>文档状态</Heading>
          <div className={styles.content}>
            <JSONTree
              hideRoot
              data={{
                nodeSize: doc.nodeSize,
                childCount: doc.childCount,
              }}
              theme={jsonTheme}
              invertTheme={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
