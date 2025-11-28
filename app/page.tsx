import { AddNote } from "@/components/AddNote";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Content } from "@/components/Content";
import { NoteHeading } from "@/components/NoteHeading";
import { Notes } from "@/components/Notes";
import { Sidebar } from "@/components/Sidebar";

export default function page() {
  return (
    <>
      <div></div>
      <AddNote />
      <NoteHeading />
      <Sidebar />
      <div></div>
      <Content />
      <Notes />
      <Breadcrumb />
    </>
  );
}
