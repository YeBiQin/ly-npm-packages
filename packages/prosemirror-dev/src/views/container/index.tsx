import React from "react";
import styles from "./index.module.scss";
import TabClose from "./TabClose";
import TabSelector from "./TabSelector";
import { TAB_MENU } from "../../..";
import { Tab, TabList, TabPanel, Tabs } from "../../components";

import { PanelState } from "./PanelState";
import { PanelStructure } from "./PanelStructure";

const ToolContainer = () => {
  return (
    <Tabs>
      <div className={styles.expand_container}>
        <div className={styles.container_header}>
          <TabList>
            {TAB_MENU.map((item, index) => (
              <Tab key={item.key} index={index}>
                {item.label}
              </Tab>
            ))}
          </TabList>

          <div className={styles.container_action}>
            <TabSelector />
            <TabClose />
          </div>
        </div>

        <TabPanel className={styles.container_content}>
          <PanelStructure />
          <PanelState />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default ToolContainer;
