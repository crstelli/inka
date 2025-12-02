import { useToggleGlobalSidebar } from "@/stores/menusStore";

import { Button } from "@/components/ui/button";
import { Menu, SquarePen } from "lucide-react";

function AddNote() {
  const toggleSidebar = useToggleGlobalSidebar();

  return (
    <div className="flex justify-between items-center px-4">
      <Button onClick={toggleSidebar} size="icon" variant="secondary">
        <Menu />
      </Button>
      <span className="font-semibold">All Notes</span>
      <Button size="icon" variant="secondary">
        <SquarePen />
      </Button>
    </div>
  );
}

export { AddNote };
