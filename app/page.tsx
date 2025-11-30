import { AddNote } from "@/components/AddNote";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Content } from "@/components/Content";
import { ContentHeading } from "@/components/ContentHeading";
import { NoteHeading } from "@/components/NoteHeading";
import { Notes } from "@/components/Notes";
import { Search } from "@/components/Search";
import { Sidebar } from "@/components/Sidebar";

export default function page() {
  return (
    <>
      <div></div>
      <AddNote />
      <NoteHeading />
      <Sidebar />
      <Search />
      <ContentHeading />
      <Notes />
      <Content />
      <Breadcrumb />
    </>
  );
}
