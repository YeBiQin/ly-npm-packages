import { EditorView } from "prosemirror-view";
import { StateCreator } from "zustand";

interface SliceState {
  editorMap: Map<EditorView, string>;
  editorList: EditorView[];
}

const initState = (): SliceState => ({
  editorMap: new Map(),
  editorList: [],
});

export interface CommonSlice extends SliceState {
  subscribeEditor: (editorView: EditorView, editorName: string) => void;
  unsubscribeEditor: (editorView: EditorView) => void;
  destroyCommonSlice: () => void;
}

export const createCommonSlice: StateCreator<CommonSlice> = (set, get) => ({
  ...initState(),
  subscribeEditor(editorView, editorName) {
    const { editorMap, editorList } = get();
    editorMap.set(editorView, editorName);
    set({ editorList: [...editorList, editorView] });
  },
  unsubscribeEditor(editorView) {
    const { editorMap, editorList } = get();

    // 移除编辑器映射名单
    editorMap.delete(editorView);

    // 移除编辑器列表项
    const newEditorList = editorList.filter((editor) => editor !== editorView);
    set({ editorMap: new Map(editorMap), editorList: newEditorList });
  },
  destroyCommonSlice: () => set({ ...initState() }),
});
