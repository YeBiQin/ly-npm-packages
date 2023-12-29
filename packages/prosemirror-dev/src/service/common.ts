import { EditorView } from "prosemirror-view";
import { StateCreator } from "zustand";
import { getKeyByValue } from "../..";

interface SliceState {
  editorMap: Map<string, EditorView>;
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
    editorMap.set(editorName, editorView);
    set({ editorList: [...editorList, editorView] });
  },
  unsubscribeEditor(editorView) {
    const { editorMap, editorList } = get();

    const editorKey = getKeyByValue(editorMap, editorView);
    if (editorKey) editorMap.delete(editorKey);

    const newEditorList = editorList.filter((editor) => editor !== editorView);
    set({ editorMap: new Map(editorMap), editorList: newEditorList });
  },
  destroyCommonSlice: () => set({ ...initState() }),
});
