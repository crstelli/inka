"use client";

// prettier-ignore
import { Pagination as PaginationComp, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { usePagination } from "@/hooks/usePagination";

function Pagination() {
  const { page, nextPage, prevPage, canUndo, canNext } = usePagination();

  return (
    <PaginationComp>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => canUndo && prevPage()} />
        </PaginationItem>
        <PaginationItem className={!canUndo ? "opacity-0 pointer-events-none" : ""}>
          <PaginationLink onClick={prevPage}>{page - 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem className={!canNext ? "opacity-0 pointer-events-none" : ""}>
          <PaginationLink onClick={nextPage}>{page + 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => canNext && nextPage()} />
        </PaginationItem>
      </PaginationContent>
    </PaginationComp>
  );
}

export { Pagination };
