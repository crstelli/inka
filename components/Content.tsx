"use client";

import { useEffect, useRef } from "react";

import { useOpenNote, useOpenNoteContent, useOpenNoteId } from "@/stores/notesStore";
import { useClearEditor, useSetContent, useSetEditor } from "@/stores/editorStore";

import { useEditor as useEditorApi, EditorContent } from "@tiptap/react";
import { Placeholder } from "@tiptap/extensions";
import StarterKit from "@tiptap/starter-kit";

import { FloatingMenu } from "@/components/FloatingMenu";

function Content() {
  const openNote = useOpenNote();
  const openNoteId = useOpenNoteId();
  const openNoteContent = useOpenNoteContent();

  const setEditor = useSetEditor();
  const clearEditor = useClearEditor();
  const setContent = useSetContent();

  const contentRef = useRef(openNoteContent);

  const editor = useEditorApi({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start by writing something...",
      }),
    ],
    editorProps: {
      attributes: {
        class: "py-8 px-16",
      },
    },

    immediatelyRender: false,
  });

  // Sync editor with editorStore.
  useEffect(() => {
    if (editor) setEditor(editor);
  }, [editor, setEditor]);

  useEffect(() => {
    contentRef.current = openNoteContent;
  }, [openNoteContent]);

  // Sync editor with current selected note.
  useEffect(() => {
    if (openNoteId && contentRef.current) setContent(contentRef.current);
    else clearEditor();
  }, [clearEditor, openNoteId, setContent]);

  if (!editor) return null;

  return (
    <div className="w-full overflow-auto">
      {editor && <FloatingMenu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}

export { Content };
