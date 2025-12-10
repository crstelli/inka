import { useMaxPage, useMinPage, usePage, usePageNext, usePagePrev } from "@/stores/filterStore";

export function usePagination() {
  const page = usePage();

  const nextPage = usePageNext();
  const prevPage = usePagePrev();

  const canUndo = page > useMinPage();
  const canNext = page < useMaxPage();

  return { page, nextPage, prevPage, canUndo, canNext };
}
