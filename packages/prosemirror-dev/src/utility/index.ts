export const activeNodeDOM = (() => {
  let timer: any;
  let element: HTMLElement;

  const clearActiveStyle = () => {
    clearTimeout(timer);
    element?.style?.removeProperty?.("outline");
  };

  return (nodeElement: HTMLElement) => {
    clearActiveStyle();

    timer = setTimeout(clearActiveStyle, 5000);
    element = nodeElement;

    nodeElement.style.outline = "2px solid rgba(0,200,0,0.75)";
    nodeElement.scrollIntoView?.({ block: "center", behavior: "smooth" });
  };
})();

// 通过 Map 对象的 Value 获取 Key 值
export const getKeyByValue = (map: Map<any, any>, searchValue: any) => {
  for (let [key, value] of map.entries()) {
    if (value === searchValue) return key;
  }
  return null; // 如果未找到匹配的键，则返回 null 或其他你希望的默认值
};
