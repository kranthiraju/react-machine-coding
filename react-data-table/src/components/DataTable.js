import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 5;

const DataTable = ({ data }) => {
  const [dataTableData, setDataTableData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({});

  const generateHeaders = (data) => {
    const firstRow = data?.[0];
    const rowKeys = firstRow ? Object.keys(firstRow) : [];
    setHeaders(rowKeys);
  };

  const generateRows = (data) => {
    const rowsData = data?.map((item) => Object.values(item));
    setRows(rowsData);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handleItemsPerPage = (items) => {
    setPage(1);
    setItemsPerPage(items);
  };

  const handleSort = (key) => {
    let direction = "ascending";

    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    setDataTableData(data);
  }, [data]);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = itemsPerPage * page;

    const slicedData = dataTableData?.slice(startIndex, endIndex);
    setTableData(slicedData);
    setTotalPages(Math.ceil(dataTableData?.length / itemsPerPage));
  }, [page, itemsPerPage, dataTableData]);

  useEffect(() => {
    let sortableData = [...dataTableData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    setDataTableData(sortableData);
  }, [sortConfig]);

  useEffect(() => {
    generateHeaders(tableData);
    generateRows(tableData);
  }, [tableData]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {headers?.map((header, index) => (
              <th key={index} onClick={() => handleSort(header)}>
                {header}
                {sortConfig?.key === header &&
                  (sortConfig?.direction === "ascending" ? "▲" : "▼")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, index) => (
            <tr>
              {row?.map((item, row_index) => (
                <td>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        page={page}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handleItemsPerPage={handleItemsPerPage}
      />
    </div>
  );
};

export default DataTable;
