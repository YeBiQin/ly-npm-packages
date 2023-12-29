import { StateCreator } from "zustand";

interface SliceState {
  isOpen: boolean;
}

const initState = (): SliceState => ({
  isOpen: false,
});

export interface ContainerSlice extends SliceState {
  destroyContainerSlice: () => void;
}

export const createContainerSlice: StateCreator<ContainerSlice> = (set, get) => ({
  ...initState(),
  destroyContainerSlice: () => set({ ...initState() }),
});
