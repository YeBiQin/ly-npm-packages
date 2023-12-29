import { useToolStore } from "common/service";

const DevTools = () => {
  const isOpen = useToolStore((state) => state.isOpen);
  return isOpen ? <ExpandedContainer /> : <ExpandedTrigger />;
};

export default DevTools;
