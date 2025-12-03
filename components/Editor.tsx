"use client";

import { useCallback, useEffect, useRef } from "react";

import {
  useAddNote,
  useOpenNote,
  useOpenNoteContent,
  useOpenNoteId,
  useSetOpenNote,
  useUpdateNote,
} from "@/stores/notesStore";

import { useEditor, EditorContent } from "@tiptap/react";
import { Placeholder } from "@tiptap/extensions";
import StarterKit from "@tiptap/starter-kit";

import { FloatingMenu } from "@/components/FloatingMenu";
import { debounce } from "@/lib/debounce";
import { createNote } from "@/lib/createNote";

function Editor() {
  const title = "a";
  const updateNote = useUpdateNote();
  const addNote = useAddNote();
  const setOpenNote = useSetOpenNote();
  const openNote = useOpenNote();
  const openNoteId = useOpenNoteId();
  const openNoteContent = useOpenNoteContent();

  const contentRef = useRef(openNoteContent);

  const editor = useEditor({
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

  const handleSave = useCallback(() => {
    const content = editor?.getJSON();
    if (!content || !editor) return;

    if (openNote) {
      updateNote({ id: openNote.id, content });
    } else {
      const newNote = createNote({ content, title });
      addNote(newNote);
      setOpenNote(newNote.id);
    }
  }, [addNote, editor, openNote, setOpenNote, title, updateNote]);

  const debounceSave = debounce(handleSave, 500);

  useEffect(() => {
    if (!editor) return;

    const cb = () => {
      debounceSave();
    };
    editor.on("update", cb);

    return () => {
      editor.off("update", cb);
    };
  }, [debounceSave, editor]);

  // Sync editor with current selected note.
  useEffect(() => {
    if (!editor) return;

    if (openNoteId && contentRef.current) editor.commands.setContent(contentRef.current);
    else editor.commands.clearContent();
  }, [openNoteId, editor]);

  if (!editor) return null;

  return (
    <div className="w-full overflow-auto [grid-area:editor]">
      {editor && <FloatingMenu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}

export { Editor };
