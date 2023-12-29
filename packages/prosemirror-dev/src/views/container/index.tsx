import React from "react";
import styles from "./index.module.scss";
import TabItem from "./TabItem";
import TabClose from "./TabClose";
import TabSelector from "./TabSelector";
import { TAB_MENU } from "../../..";
import { TabStructure } from "./TabPanels";

const ToolContainer = () => {
  return (
    <div className={styles.expand_container}>
      <div className={styles.container_header}>
        <div className={styles.container_tabs}>
          {TAB_MENU.map((item) => (
            <TabItem key={item.key} item={item} />
          ))}
        </div>

        <div className={styles.container_action}>
          <TabSelector />

          <TabClose />
        </div>
      </div>

      <div className={styles.container_content}>
        <TabStructure />
      </div>
    </div>
  );
};

export default ToolContainer;
