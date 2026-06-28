import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import ProductsGrid from "../components/ProductsGrid";

const PAGE_SIZE = 9;

const PaginationContainer = () => {
  const [apiResults, setAPIResults] = useState({});
  const [productsData, setProductsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=70");
    const json_data = await data.json();
    setAPIResults(json_data);
    setTotalPages(Math.ceil(json_data.products.length / PAGE_SIZE));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (apiResults) {
      const totalPages = apiResults.total;
      const startIndex = currentPage * PAGE_SIZE;
      const endIndex = (currentPage + 1) * PAGE_SIZE;

      const slicedResults = apiResults?.products?.slice(startIndex, endIndex);

      setProductsData(slicedResults);
    }
  }, [apiResults, currentPage]);

  if (!apiResults?.products?.length) {
    return <p>No Products available</p>;
  }
  return (
    <div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handlePageChange={handlePageChange}
      />
      <ProductsGrid productsData={productsData} />
    </div>
  );
};

export default PaginationContainer;
