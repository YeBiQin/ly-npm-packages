import React, {
  useState,
  useContext,
  forwardRef,
  createContext,
  HTMLAttributes,
} from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

const TabsContext = createContext({
  activeIndex: 0,
  setActiveIndex: (index: number) => {},
});

// [Tab组件]---------------------------------------------------------
interface TabProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
}

export const Tab = forwardRef((props: TabProps, ref: any) => {
  const { index, className, children, onClick, ...others } = props;

  const { activeIndex, setActiveIndex } = useContext(TabsContext);

  const handleClick = (e: any) => {
    onClick?.(e);
    setActiveIndex(index);
  };

  return (
    <div
      ref={ref}
      className={classNames(styles.tab, className)}
      data-active={index === activeIndex}
      onClick={handleClick}
      {...others}
    >
      {children}
    </div>
  );
});

// [TabList组件]-------------------------------------------------------
interface TabListProps extends HTMLAttributes<HTMLDivElement> {}

export const TabList = forwardRef((props: TabListProps, ref: any) => {
  const { className, children, ...others } = props;

  return (
    <div ref={ref} className={classNames(styles.tab_list, className)} {...others}>
      {children}
    </div>
  );
});

// [TabPanel组件]------------------------------------------------------
interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {}

export const TabPanel = forwardRef((props: TabPanelProps, ref: any) => {
  const { className, children, ...others } = props;

  const { activeIndex } = useContext(TabsContext);

  return (
    <div ref={ref} className={classNames(styles.tab_panel, className)} {...others}>
      {Array.isArray(children) ? children[activeIndex] || null : children}
    </div>
  );
});

// [Tabs组件]---------------------------------------------------------
interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultIndex?: number;
}

export const Tabs = forwardRef((props: TabsProps, ref: any) => {
  const { className, defaultIndex, children, ...others } = props;

  const [activeIndex, setActiveIndex] = useState(defaultIndex ?? 0);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className={classNames(styles.tabs, className)} ref={ref} {...others}>
        {children}
      </div>
    </TabsContext.Provider>
  );
});
