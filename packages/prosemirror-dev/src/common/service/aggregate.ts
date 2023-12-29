import { StateCreator } from "zustand";

import { ToolSlice } from "./index";

export interface AggregateSlice {
  destroyNotepad: () => void;
}

export const createAggregateSlice: StateCreator<ToolSlice, [], [], AggregateSlice> = (
  set,
  get
) => ({
  destroyNotepad: () => {
    get().destroyCommonSlice?.();
    get().destroyEditorSlice?.();
  },
});
