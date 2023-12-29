import React from "react";
import ReactDOM from "react-dom";
import { EditorView } from "prosemirror-view";

import { PMDeveloperTool } from "./views";
import { subscribeOnHandler } from "./core";
import { DEVTOOLS_ID_NAME, toolStore } from "..";

const createToolComponent = () => {
  const container = document.createElement("div");
  container.id = DEVTOOLS_ID_NAME;
  document.body.appendChild(container);
  ReactDOM.render(<PMDeveloperTool />, container);
};

export const initDeveloperTool = (
  editorView: EditorView,
  editorName = Date.now().toString()
) => {
  const element = document.getElementById(DEVTOOLS_ID_NAME);
  if (!element) createToolComponent();

  subscribeOnHandler(editorView);

  toolStore.getState().subscribeEditor(editorView, editorName);
};
