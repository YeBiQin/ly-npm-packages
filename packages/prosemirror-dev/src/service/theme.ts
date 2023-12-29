import { StateCreator } from "zustand";
import { nodeTheme } from "../..";

interface SliceState {
  colorsMap: Map<string, string>;
}

const initState = (): SliceState => ({
  colorsMap: new Map(),
});

export interface ThemeSlice extends SliceState {
  getNodeTheme: (type: string) => string;
  destroyThemeSlice: () => void;
}

export const createThemeSlice: StateCreator<ThemeSlice> = (set, get) => ({
  ...initState(),
  getNodeTheme(type) {
    const { colorsMap } = get();
    const color = colorsMap.get(type);
    if (color) return color;

    const index = colorsMap.size % nodeTheme.length;
    const colorTheme = nodeTheme[index];
    colorsMap.set(type, colorTheme);
    return colorTheme;
  },
  destroyThemeSlice: () => set({ ...initState() }),
});
