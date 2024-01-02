import { StateCreator } from "zustand";
import { TabKeyEnum } from "../shared";

interface SliceState {
  isOpen: boolean;
  activeTab: any;
}

const initState = (): SliceState => ({
  isOpen: false,
  activeTab: TabKeyEnum.Structure,
});

export interface ContainerSlice extends SliceState {
  destroyContainerSlice: () => void;
}

export const createContainerSlice: StateCreator<ContainerSlice> = (set, get) => ({
  ...initState(),
  destroyContainerSlice: () => set({ ...initState() }),
});
