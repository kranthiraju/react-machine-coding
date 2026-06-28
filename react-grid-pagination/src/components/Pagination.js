import React from "react";

const Pagination = ({
  totalPages,
  currentPage,
  handlePrev,
  handleNext,
  handlePageChange,
}) => {
  return (
    <div>
      {currentPage !== 0 && <button onClick={handlePrev}>prev</button>}
      {[...Array(totalPages).keys()]?.map((page) => (
        <button
          key={page}
          className={page === currentPage ? "selected" : ""}
          onClick={() => handlePageChange(page)}
        >
          {page + 1}
        </button>
      ))}
      {currentPage !== totalPages - 1 && (
        <button onClick={handleNext}>next</button>
      )}
    </div>
  );
};

export default Pagination;
