import { FC, MouseEvent } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { getPageNumbers } from '@/utils';
import { useRouter } from 'next/navigation';

interface IPaginationBarProps {
  totalPages: number;
  currentPage: number;
}

const PaginationBar: FC<IPaginationBarProps> = ({
  totalPages,
  currentPage,
}) => {
  const router = useRouter();

  const pageNumbers = getPageNumbers(totalPages);

  const onPreviousLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur();

    if (currentPage > 1) {
      router.push(`?page=${currentPage - 1}`);
    }
  };

  const onNextLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur();

    if (currentPage < totalPages) {
      router.push(`?page=${currentPage + 1}`);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={onPreviousLinkClick} />
        </PaginationItem>

        {pageNumbers.map((page) => {
          const href = `?page=${page}`;
          const isActive = page === currentPage;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={href}
                isActive={isActive}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={onNextLinkClick} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationBar;
