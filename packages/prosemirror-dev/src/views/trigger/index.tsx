import React, { memo } from "react";
import styles from "./index.module.scss";
import { toolStore } from "../../..";

const ToolTrigger = () => {
  const handleOpenEvt = () => {
    toolStore.setState({ isOpen: true });
  };

  return (
    <div className={styles.collapsed_button} onClick={handleOpenEvt}>
      🛠
    </div>
  );
};

export default ToolTrigger;
