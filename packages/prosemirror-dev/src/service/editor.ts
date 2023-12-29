import { Node } from "prosemirror-model";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { StateCreator } from "zustand";

interface PMEditorState {
  selectNode: Node | null;
  editorView: EditorView | null;
  editorState: EditorState | null;
}

const initState = (): PMEditorState => ({
  selectNode: null,
  editorView: null,
  editorState: null,
});

export interface EditorSlice extends PMEditorState {
  switchEditor: (editor: EditorView) => void;
  dispatchEditor: (editor: EditorView) => void;
  destroyEditorSlice: () => void;
}

export const createEditorSlice: StateCreator<EditorSlice> = (set, get) => ({
  ...initState(),
  switchEditor: (editor) => {
    set({
      ...initState(),
      editorView: editor,
      editorState: editor.state,
    });
  },
  dispatchEditor: (editor) => {
    const { editorView } = get();
    if (editor === editorView) {
      set({ selectNode: null, editorState: editor.state });
    }
  },
  destroyEditorSlice: () => {
    // 然后再重新初始化新的编辑器视图
    set({ ...initState() });
  },
});
