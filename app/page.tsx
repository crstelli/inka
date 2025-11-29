import { NotesProvider } from "@/components/notesContext/Provider";

import { AddNote } from "@/components/AddNote";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Content } from "@/components/Content";
import { NoteHeading } from "@/components/NoteHeading";
import { Notes } from "@/components/Notes";
import { Search } from "@/components/Search";
import { Sidebar } from "@/components/Sidebar";

export default function page() {
  return (
    <NotesProvider>
      <div></div>
      <AddNote />
      <NoteHeading />
      <Sidebar />
      <Search />
      <Content />
      <Notes />
      <Breadcrumb />
    </NotesProvider>
  );
}
