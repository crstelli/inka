import {
  Pagination as PaginationComp,
  PaginationContent,
  PaginationEllipsis,
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
    <PaginationComp>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => canUndo && prevPage()} href="#" />
        </PaginationItem>
        <PaginationItem className={!canUndo ? "opacity-0 pointer-events-none" : ""}>
          <PaginationLink onClick={prevPage} href="#">
            {page - 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className={!canNext ? "opacity-0 pointer-events-none" : ""}>
          <PaginationLink onClick={nextPage} href="#">
            {page + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => canNext && nextPage()} href="#" />
        </PaginationItem>
      </PaginationContent>
    </PaginationComp>
  );
}

export { Pagination };
