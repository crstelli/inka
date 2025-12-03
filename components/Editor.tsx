"use client";

import { useEffect } from "react";

import { useAddNote, useOpenNote, useSetOpenNote, useUpdateNote } from "@/stores/notesStore";
import { debounce } from "@/lib/debounce";
import { createNote } from "@/lib/createNote";

import { useEditor, EditorContent } from "@tiptap/react";
import { Placeholder } from "@tiptap/extensions";
import StarterKit from "@tiptap/starter-kit";

import { FloatingMenu } from "@/components/FloatingMenu";

function Editor() {
  const addNote = useAddNote();
  const updateNote = useUpdateNote();
  const setOpenNote = useSetOpenNote();

  const openNote = useOpenNote();

  const noteId = openNote?.id;
  const noteContent = openNote?.content;

  const debounceSave = debounce(function () {
    if (!editor) return;
    const content = editor.getJSON();

    if (openNote) {
      updateNote({ id: openNote.id, content });
    } else {
      const newNote = createNote({ content });

      addNote(newNote);
      setOpenNote(newNote.id);
    }
  }, 500);

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

    onUpdate: debounceSave,

    immediatelyRender: false,
  });

  // Sync editor with current selected note.
  useEffect(() => {
    if (!editor) return;

    if (noteId && noteContent) editor.commands.setContent(noteContent, { emitUpdate: false });
    else editor.commands.clearContent(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId, editor]); // Disabled ESLint rule to avoid editor setContent on every update.

  if (!editor) return null;

  return (
    <div className="w-full overflow-auto [grid-area:editor]">
      {editor && <FloatingMenu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}

export { Editor };
