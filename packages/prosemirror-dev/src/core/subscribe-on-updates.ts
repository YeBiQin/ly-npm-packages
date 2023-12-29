import { EditorView } from "prosemirror-view";
import { Transaction } from "prosemirror-state";

import { toolStore } from "../..";

function replaceDestroyFn(editorView: EditorView) {
  const maybeDestroy = editorView._props.destroy;
  const destroy = (maybeDestroy || editorView.destroy).bind(editorView);

  const handleDestroy = () => {
    destroy();
    toolStore.getState().unsubscribeEditor(editorView);
  };

  if (maybeDestroy) {
    editorView._props.destroy = handleDestroy;
  } else {
    editorView.destroy = handleDestroy;
  }
}

function replaceDispatchFn(editorView: EditorView) {
  const maybeDispatchTransaction = editorView._props.dispatchTransaction;
  const dispatch = (maybeDispatchTransaction || editorView.dispatch).bind(editorView);

  const handleDispatch = function (tr: Transaction) {
    dispatch(tr);

    if (tr.docChanged && toolStore.getState().isOpen) {
      toolStore.getState().dispatchEditor(editorView);
    }
  };

  if (maybeDispatchTransaction) {
    editorView._props.dispatchTransaction = handleDispatch;
  } else {
    editorView.dispatch = handleDispatch;
  }
}

export function subscribeOnHandler(editorView: EditorView) {
  replaceDestroyFn(editorView);
  replaceDispatchFn(editorView);
}
