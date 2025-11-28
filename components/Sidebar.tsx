import { Settings, StickyNote, Tag, Trash } from "lucide-react";
import { Button } from "./ui/button";

function Sidebar() {
  return (
    <div className="bg-secondary h-full flex flex-col row-span-3 px-4 py-10 gap-2">
      <Button variant="ghost" className="justify-start">
        <StickyNote className="rotate-90" />
        <span>All Notes</span>
      </Button>
      <Button variant="ghost" className="justify-start">
        <Tag />
        <span>Tags</span>
      </Button>
      <Button variant="ghost" className="justify-start">
        <Trash />
        <span>Trash</span>
      </Button>
      <Button variant="ghost" className="justify-start">
        <Settings />
        <span>Settings</span>
      </Button>
    </div>
  );
}

export { Sidebar };
