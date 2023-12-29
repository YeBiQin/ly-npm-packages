import { StateCreator } from "zustand";

interface SliceState {}

const initState = (): SliceState => ({});

export interface CommonSlice extends SliceState {
  destroyCommonSlice: () => void;
}

export const createCommonSlice: StateCreator<CommonSlice> = (set, get) => ({
  ...initState(),
  destroyCommonSlice: () => set({ ...initState() }),
});
