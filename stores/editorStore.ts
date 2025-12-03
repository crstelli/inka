import type { Editor, JSONContent } from "@tiptap/react";
import { create } from "zustand";

interface EditorState {
  editor: Editor | undefined;

  setEditor: (editor: Editor) => void;
  clearEditor: () => void;
  setContent: (content: JSONContent) => void;
}

const useEditorStore = create<EditorState>((set) => ({
  editor: undefined,

  setEditor: (editor) => set(() => ({ editor })),

  clearEditor: () =>
    set((state) => {
      state.editor?.commands.clearContent();
      return state;
    }),
  setContent: (content) =>
    set((state) => {
      state.editor?.commands.setContent(content);

      return state;
    }),
}));

export const useSetEditor = () => useEditorStore((state) => state.setEditor);
export const useClearEditor = () => useEditorStore((state) => state.clearEditor);
export const useSetContent = () => useEditorStore((state) => state.setContent);
