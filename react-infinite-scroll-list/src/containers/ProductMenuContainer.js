import React, { useState, useEffect, useRef } from "react";
import ProductItem from "../components/ProductItem";

const INITIAL_LOAD = 10;

const ProductMenuContainer = () => {
  const [apiResults, setAPIResults] = useState({});
  const [productsList, setProductsList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef(null);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const json_data = await data.json();
    setAPIResults(json_data);
    setPage(1);
    setLoading(false);
  };

  const fetchProducts = () => {
    setLoading(true);
    const startIndex = page * INITIAL_LOAD;
    const endIndex = (page + 1) * INITIAL_LOAD;

    const slicedData = (apiResults?.products || []).slice(startIndex, endIndex);

    setProductsList((prev) => [...prev, ...slicedData]);
    setLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      {
        threshold: 1,
      }
    );

    const current = loaderRef.current;
    if (observer) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [loading]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div className="products-menu">
      {productsList?.map((item, index) => (
        <ProductItem product={item} key={index} />
      ))}
      <div ref={loaderRef} />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ProductMenuContainer;
