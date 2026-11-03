type PaginationProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};

function Pagination({ currentPage, setCurrentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-4 bg-light-mode-bg dark:bg-dark-mode-bg text-light-mode-text dark:text-white">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="bg-dark-mode-text-light-mode-element dark:bg-dark-mode-element py-1 px-6 rounded-xs shadow-sm hover:shadow-md cursor-pointer md:py-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      <span className="font-medium">
        Page {currentPage} of {totalPages || 1}
      </span>

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages || totalPages === 0}
        className="bg-dark-mode-text-light-mode-element dark:bg-dark-mode-element py-1 px-6 rounded-xs shadow-sm hover:shadow-md cursor-pointer md:py-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
