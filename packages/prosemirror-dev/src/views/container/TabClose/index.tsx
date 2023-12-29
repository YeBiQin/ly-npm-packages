import React, { memo } from "react";
import styles from "./index.module.scss";
import { toolStore } from "../../../..";

const TabClose = () => {
  const handleCloseEvt = () => {
    toolStore.setState({ isOpen: false });
  };

  return (
    <div className={styles.container_close} onClick={handleCloseEvt}>
      ×
    </div>
  );
};

export default memo(TabClose);
