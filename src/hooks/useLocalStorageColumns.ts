import { useState, useEffect } from "react";

const useLocalStorageColumns = (key, initialColumns) => {

  const savedColumns = JSON.parse(localStorage.getItem(key) || "null");

  const [columns, setColumns] = useState(() => {
    return savedColumns && savedColumns.length > 0 ? savedColumns : initialColumns;
  });


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(columns));
  }, [columns, key]);

  return [columns, setColumns]; 
};

export default useLocalStorageColumns;
