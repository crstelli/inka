"use client";

import { Spinner } from "@/components/Spinner";
import { Breadcrumb as BreadcrumbComp, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb";
import { useSavingStatus } from "@/stores/openNoteStore";

function Breadcrumb() {
  const savingStatus = useSavingStatus();

  return (
    <div className="flex items-center justify-between px-4 [grid-area:breadcrumb]">
      <BreadcrumbComp>
        <BreadcrumbList>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Welcome to Inka</BreadcrumbItem>
        </BreadcrumbList>
      </BreadcrumbComp>
      {savingStatus && (
        <span className="text-secondary flex items-center gap-2">
          <Spinner size="size-4" />
          Autosaving
        </span>
      )}
    </div>
  );
}

export { Breadcrumb };
