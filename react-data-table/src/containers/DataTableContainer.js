import React, { useState, useEffect } from "react";
import DataTable from "../components/DataTable";

const DataTableContainer = () => {
  const [response, setResponse] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://dummyjson.com/recipes?select=name,cuisine,rating"
    );
    const json_data = await data.json();
    setResponse(json_data?.recipes);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <DataTable data={response} />
    </div>
  );
};

export default DataTableContainer;
