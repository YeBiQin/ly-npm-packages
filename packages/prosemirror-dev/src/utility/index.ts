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
