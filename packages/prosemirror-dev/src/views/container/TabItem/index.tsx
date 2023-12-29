import React, { memo } from "react";
import styles from "./index.module.scss";
import { useToolStore } from "../../../..";

const TabItem = ({ item }: any) => {
  const { key, label } = item;

  const activeTab = useToolStore((state) => state.activeTab);

  return (
    <div className={styles.tab_item} data-active={activeTab === key}>
      {label}
    </div>
  );
};

export default memo(TabItem);
