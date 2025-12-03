import { Button } from "@/components/ui/button";
import { Ellipsis, Info, ListChecks, PanelsTopLeft } from "lucide-react";

function NoteHeading() {
  return (
    <div className="px-4 items-center flex justify-between [grid-area:noteHeading]">
      <Button size="icon" variant="secondary">
        <PanelsTopLeft />
      </Button>
      <div className="flex items-center gap-1">
        <Button size="icon" variant="secondary">
          <Ellipsis />
        </Button>

        <Button size="icon" variant="secondary">
          <ListChecks />
        </Button>

        <Button size="icon" variant="secondary">
          <Info />
        </Button>

        <div className="size-9 rounded-full bg-secondary flex items-center justify-center">G</div>
      </div>
    </div>
  );
}

export { NoteHeading };
