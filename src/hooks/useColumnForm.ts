import { useState } from "react";

const useColumnForm = ({ addNewColumn, existingColumns } ) => {
  const [column, setColumn] = useState({
    id: Date.now(),  
    title: "",
    columnId: existingColumns.length ? Math.max(...existingColumns.map(column => column.columnId)) + 1 : 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setColumn((prevColumn) => ({ ...prevColumn, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!column.title.trim()) return; 

    addNewColumn({ ...column, id: Date.now() });  
    setColumn({
      id: Date.now(),
      title: "",
      columnId: existingColumns.length ? Math.max(...existingColumns.map(column => column.columnId)) + 1 : 1,
    });
  };

  return {
    column,
    handleChange,
    handleSubmit,
  };
};

export default useColumnForm;