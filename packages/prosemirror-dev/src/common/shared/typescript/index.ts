import { Node } from "prosemirror-model";
import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";

export type ToolSlotFn = (props: ToolSlotProps) => JSX.Element;

export type ToolSlotProps = {};

export interface DomainState {
  slot: ToolSlotFn | undefined;
  view: EditorView | null;
  views: EditorView[];
  isOpen: boolean;
  activeTab: number;
  colorsMap: Map<string, string>;
  selectNode: Node | null;
  updateState: EditorState | null;
}
