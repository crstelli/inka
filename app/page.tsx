import { Breadcrumb } from "@/components/Breadcrumb";
import { Content } from "@/components/Content";
import { Notes } from "@/components/Notes";
import { Sidebar } from "@/components/Sidebar";

export default function page() {
  return (
    <>
      <div></div>
      <div></div>
      <div></div>
      <Sidebar />
      <div></div>
      <Content />
      <Notes />
      <Breadcrumb />
    </>
  );
}
