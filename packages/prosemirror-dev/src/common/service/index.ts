// const initToolsStates = {
//   slot: undefined,
//   views: [],
//   isOpen: false,
//   activeTab: 0,
//   // ------------------
//   view: null,
//   colorsMap: new Map(),
//   selectNode: null,
//   updateState: null,
// };

import { create } from "zustand";

import { CommonSlice, createCommonSlice } from "./common";
import { EditorSlice, createEditorSlice } from "./editor";
import { AggregateSlice, createAggregateSlice } from "./aggregate";
import { ContainerSlice, createContainerSlice } from "./container";

export type ToolSlice = CommonSlice & EditorSlice & AggregateSlice & ContainerSlice;

export const useToolStore = create<ToolSlice>((...args) => ({
  ...createCommonSlice(...args),
  ...createEditorSlice(...args),
  ...createAggregateSlice(...args),
  ...createContainerSlice(...args),
}));
