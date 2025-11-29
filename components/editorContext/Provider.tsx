"use client";

import type { ReactNode, Dispatch, SetStateAction } from "react";
import type { Editor } from "@tiptap/react";

import { createContext, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface ContextProps {
  editor: Editor | undefined;
  setEditor: Dispatch<SetStateAction<Editor | undefined>>;
}

const EditorContext = createContext<null | ContextProps>(null);

function EditorProvider({ children }: Props) {
  const [editor, setEditor] = useState<Editor | undefined>(undefined);

  return <EditorContext.Provider value={{ editor, setEditor }}>{children}</EditorContext.Provider>;
}

function useNotes() {
  const context = useContext(EditorContext);

  if (!context) throw new Error("You cannot access EditorContext outside his provider.");
  return context;
}

export { EditorProvider, useNotes };
