import React from "react";

const Pagination = ({
  page,
  totalPages,
  itemsPerPage,
  handleNextPage,
  handlePrevPage,
  handleItemsPerPage,
}) => {
  return (
    <div className="pagination">
      <div className="pages">
        <button onClick={handlePrevPage} disabled={page === 1}>
          prev
        </button>
        <p>
          Page {page} of {totalPages}
        </p>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
      <div className="items">
        <label>
          Rows per page:
          <select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPage(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Pagination;
