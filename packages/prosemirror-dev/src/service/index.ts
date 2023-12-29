import { create } from "zustand";

import { ThemeSlice, createThemeSlice } from "./theme";
import { CommonSlice, createCommonSlice } from "./common";
import { EditorSlice, createEditorSlice } from "./editor";
import { AggregateSlice, createAggregateSlice } from "./aggregate";
import { ContainerSlice, createContainerSlice } from "./container";

export type ToolSlice = ThemeSlice &
  CommonSlice &
  EditorSlice &
  AggregateSlice &
  ContainerSlice;

export const useToolStore = create<ToolSlice>((...args) => ({
  ...createThemeSlice(...args),
  ...createCommonSlice(...args),
  ...createEditorSlice(...args),
  ...createAggregateSlice(...args),
  ...createContainerSlice(...args),
}));

export const toolStore = useToolStore;
