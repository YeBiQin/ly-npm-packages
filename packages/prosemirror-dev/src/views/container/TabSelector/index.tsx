import React, { memo, useCallback, useEffect, useState } from "react";

import styles from "./index.module.scss";
import { toolStore, useToolStore } from "../../../..";

const TabSelector = () => {
  const editorView = useToolStore((state) => state.editorView);
  const editorList = useToolStore((state) => state.editorList);
  const switchEditor = useToolStore((state) => state.switchEditor);

  const [visible, setVisible] = useState(false);

  const handleSelectOption = (e: any) => {
    const element = e.target as HTMLElement;

    const targetIndex = Number(element.getAttribute("data-index"));
    const { editorList, editorView } = toolStore.getState();

    const targetEditor = editorList[targetIndex];
    if (targetEditor !== editorView) switchEditor(targetEditor);
  };

  const handleToggleVisible = () => setVisible(!visible);

  const listenMousedownEvt = useCallback(() => setVisible(false), []);

  useEffect(() => {
    if (visible) {
      window.addEventListener("mousedown", listenMousedownEvt);
    } else {
      window.removeEventListener("mousedown", listenMousedownEvt);
    }
  }, [visible]);

  useEffect(() => {
    if (!editorView) switchEditor(editorList[0]);
  }, [editorView, editorList]);

  return (
    <div className={styles.selector}>
      <div className={styles.selector_value} onMouseDown={handleToggleVisible}>
        <span className={styles.selected_id}>选择编辑器</span>
      </div>

      {visible && (
        <div className={styles.selector_options} onMouseDownCapture={handleSelectOption}>
          {editorList?.map((editor, index) => (
            <div className={styles.option_item} key={index} data-index={index}>
              编辑器{index + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(TabSelector);
