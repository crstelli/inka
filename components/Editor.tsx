"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  useAddNote,
  useOpenNote,
  useOpenNoteContent,
  useOpenNoteId,
  useSetOpenNote,
  useUpdateNote,
} from "@/stores/notesStore";
import { useClearEditor, useSetContent, useSetEditor } from "@/stores/editorStore";

import { useEditor as useEditorApi, EditorContent } from "@tiptap/react";
import { Placeholder } from "@tiptap/extensions";
import StarterKit from "@tiptap/starter-kit";

import { FloatingMenu } from "@/components/FloatingMenu";
import { debounce } from "@/lib/debounce";
import { createNote } from "@/lib/createNote";
import { DEFAULT_NOTE_NAME } from "@/lib/constants";

function Editor() {
  const updateNote = useUpdateNote();
  const addNote = useAddNote();
  const setOpenNote = useSetOpenNote();
  const [title, setTitle] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
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

  const handleSave = useCallback(() => {
    const content = editor?.getJSON();
    if (!content || !editor) return;

    if (openNote) {
      updateNote({ id: openNote.id, content });
    } else {
      const newNote = createNote({ content, title });
      addNote(newNote);
      setOpenNote(newNote.id);

      setTitle(DEFAULT_NOTE_NAME);
    }
  }, [addNote, editor, openNote, setOpenNote, title, updateNote]);

  const debounceSave = debounce(handleSave, 500);

  useEffect(() => {
    if (!editor) return;

    const cb = () => {
      setIsEmpty(!editor.state.doc.textContent.length);
      debounceSave();
    };
    editor.on("update", cb);

    return () => {
      editor.off("update", cb);
    };
  }, [debounceSave, editor]);

  if (!editor) return null;

  return (
    <div className="w-full overflow-auto [grid-area:editor]">
      {editor && <FloatingMenu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}

export { Editor };
