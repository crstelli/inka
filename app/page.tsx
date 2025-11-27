import { Breadcrumb } from "@/components/Breadcrumb";
import { Content } from "@/components/Content";
import { Notes } from "@/components/Notes";
import { Sidebar } from "@/components/Sidebar";

export default function page() {
  return (
    <>
      <div className="bg-red-400">Placeholder</div>
      <div className="bg-green-400">All Notes</div>
      <div className="bg-yellow-400">Placeholder</div>
      <Sidebar />
      <div className="bg-blue-400">Search</div>
      <Content />
      <Notes />
      <Breadcrumb />
    </>
  );
}
