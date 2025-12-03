import {
  Pagination as PaginationComp,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useMaxPage, useMinPage, usePage, usePageNext, usePagePrev } from "@/stores/searchStore";

function Pagination() {
  const page = usePage();

  const minPage = useMinPage();
  const maxPage = useMaxPage();

  const nextPage = usePageNext();
  const prevPage = usePagePrev();

  const canUndo = page > minPage;
  const canNext = page < maxPage;

  return (
    <PaginationComp className="[grid-area:pagination]">
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
