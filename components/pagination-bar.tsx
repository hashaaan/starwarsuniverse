import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, type ReadonlyURLSearchParams } from "next/navigation";

type PaginationBarProps = {
  readonly perPage: number;
  readonly totalPages: number;
  readonly currentPage: number;
  readonly searchParams?: ReadonlyURLSearchParams;
};

const PaginationBar = ({
  perPage,
  totalPages,
  currentPage,
  searchParams,
}: PaginationBarProps) => {
  const pathname = usePathname();
  const noOfPages = Math.ceil(totalPages / perPage);

  const pages = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ].filter((page) => page >= 1 && page <= noOfPages);

  const getHref = (pageNo: number) => {
    let verifiedPageNo = pageNo;

    if (pageNo <= 0) {
      verifiedPageNo = 1;
    } else if (pageNo > noOfPages) {
      verifiedPageNo = noOfPages;
    }

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", verifiedPageNo.toString());

    return `${pathname}?${newSearchParams.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={getHref(currentPage - 1)} />
          </PaginationItem>
        )}

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={getHref(page)}
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < noOfPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPage < noOfPages && (
          <PaginationItem>
            <PaginationNext href={getHref(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationBar;
