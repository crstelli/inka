"use client";

import { useEffect } from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import { Placeholder } from "@tiptap/extensions";
import { ListKit, TaskList } from "@tiptap/extension-list";

import StarterKit from "@tiptap/starter-kit";

import { FloatingMenu } from "@/components/FloatingMenu";
import { updateNote } from "@/actions/notes/updateNote";
import { debounce } from "@/lib/utils/debounce";
import { DEBOUNCE_SAVE_TIME } from "@/lib/utils/constants";
import { useSetOpenNote, useSetSavingStatus } from "@/stores/openNoteStore";
import { createNote } from "@/actions/notes/createNote";
import type { Note } from "@/lib/types/Note";

interface Props {
  note: Note | null;
}

export default function Editor({ note }: Props) {
  const setSavingStatus = useSetSavingStatus();
  const setOpenNote = useSetOpenNote();

  function handleSave() {
    setSavingStatus(true);
    debounceSave();
  }

  const debounceSave = debounce(async () => {
    if (!editor) return;
    const content = editor.getJSON();

    if (note) updateNote({ noteId: note.id, content });
    else {
      const newNote = await createNote(content);
      setOpenNote(newNote.id);
    }

    setSavingStatus(false);
  }, DEBOUNCE_SAVE_TIME);

  const editor = useEditor({
    extensions: [
      StarterKit,
      ListKit,
      TaskList,
      Placeholder.configure({
        placeholder: "Start by writing something...",
      }),
    ],
    editorProps: {
      attributes: {
        class: "py-4 lg:py-8 px-6 lg:px-16",
      },
    },

    onUpdate: handleSave,

    immediatelyRender: false,
  });

  // Sync editor with current selected note.
  useEffect(() => {
    if (!editor) return;

    if (note?.id && note?.content) editor.commands.setContent(JSON.parse(note.content), { emitUpdate: false });
    else editor.commands.clearContent(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note?.id, editor]); // Disabled ESLint rule to avoid editor setContent on every update.

  if (!editor) return null;

  return (
    <div className="w-full overflow-auto">
      {editor && <FloatingMenu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}
