import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { StateCreator } from "zustand";

interface PMEditorState {
  editorView: EditorView | null;
  editorState: EditorState | null;
}

const initState = (): PMEditorState => ({
  editorView: null,
  editorState: null,
});

export interface EditorSlice extends PMEditorState {
  destroyEditorSlice: () => void;
}

export const createEditorSlice: StateCreator<EditorSlice> = (set, get) => ({
  ...initState(),
  destroyEditorSlice: () => {
    // // 先销毁原有的编辑器视图
    // get().editorView?.destroy?.();
    // // 然后再重新初始化新的编辑器视图
    // set({ ...initState() });
  },
});
