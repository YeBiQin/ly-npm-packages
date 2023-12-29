import { StateCreator } from "zustand";

interface SliceState {
  isOpen: boolean;
  activeTab: number;
}

const initState = (): SliceState => ({
  isOpen: false,
  activeTab: 0,
});

export interface ContainerSlice extends SliceState {
  destroyContainerSlice: () => void;
}

export const createContainerSlice: StateCreator<ContainerSlice> = (set, get) => ({
  ...initState(),
  destroyContainerSlice: () => set({ ...initState() }),
});
