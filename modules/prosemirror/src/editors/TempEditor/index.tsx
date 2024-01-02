import React, { HTMLAttributes, memo, useRef, useState } from "react";
import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";
import { useMemoizedFn, useMount, useUnmount } from "ahooks";
import applyDevTools from "prosemirror-dev-tools";

// import initMockData from "./tests/doc.mock";
import initMockData from "./tests/init.mock";
// import textMock from "./tests/document.mock";
import initDocumentSchema from "./schema";

import { PMStyles, assembleNodeViews } from "@ly/prosemirror";
import { initDeveloperTool } from "laoye-prosemirror-dev";

interface EditorProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}

export const TempEditor = memo((props: EditorProps) => {
  const { name, children } = props;

  const mountedRef = useRef<HTMLDivElement>(null);
  const unmountedTool = useRef<any>(null);

  const [editorView, setEditorView] = useState<EditorView>();

  /** 创建编辑器视图 */
  const createEditorView = useMemoizedFn((doc: any) => {
    const schema = initDocumentSchema();

    const editorState = EditorState.create({
      doc: schema.nodeFromJSON(doc),
      schema: schema,
    });

    const editorView = new EditorView(mountedRef.current, {
      state: editorState,
      attributes: {
        class: PMStyles.document_editor,
      },
      nodeViews: assembleNodeViews(schema),
      dispatchTransaction: (tr) => {
        editorView.updateState(editorView.state.apply(tr));
      },
    });

    setEditorView(editorView);
    initDeveloperTool(editorView, name);
    unmountedTool.current = applyDevTools(editorView);
  });

  useMount(() => {
    const mockData = initMockData();
    createEditorView(mockData);
  });

  useUnmount(() => {
    editorView?.destroy();
    unmountedTool?.current?.();
  });

  return (
    <div className={PMStyles.document_mounted} ref={mountedRef}>
      {children}
    </div>
  );
});
