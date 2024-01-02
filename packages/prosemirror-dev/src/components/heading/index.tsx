import React from "react";
import styles from "./index.module.scss";

type HeadingProps = {
  children: React.ReactNode;
  output?: any;
};

export const Heading = (props: HeadingProps) => {
  const { children, output } = props;

  const handleClick = () => {
    console.log(">>>>> 打印数据", output);
  };

  return (
    <div className={styles.heading}>
      <div className={styles.heading_label}>{children}</div>

      {Boolean(output) && (
        <div className={styles.heading_output} onClick={handleClick}>
          打印数据
        </div>
      )}
    </div>
  );
};
