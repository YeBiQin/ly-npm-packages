import { EditorView } from "prosemirror-view";
import { StateCreator } from "zustand";

interface SliceState {
  editorList: EditorView[];
}

const initState = (): SliceState => ({
  editorList: [],
});

export interface CommonSlice extends SliceState {
  subscribeEditor: (editorView: EditorView) => void;
  unsubscribeEditor: (editorView: EditorView) => void;
  destroyCommonSlice: () => void;
}

export const createCommonSlice: StateCreator<CommonSlice> = (set, get) => ({
  ...initState(),
  subscribeEditor: (editorView) => {
    const { editorList } = get();
    set({ editorList: [...editorList, editorView] });
  },
  unsubscribeEditor: (editorView) => {},
  destroyCommonSlice: () => set({ ...initState() }),
});
