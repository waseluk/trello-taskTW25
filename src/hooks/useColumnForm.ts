import { useState } from "react";

const useColumnForm = ({ addNewColumn, existingColumns }) => {
const [column, setColumn] = useState({
    title: "",
    columnId: existingColumns.length + 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColumn((prevColumn) => ({ ...prevColumn, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColumn = { ...column, id: Date.now() };
    addNewColumn(newColumn);
    setColumn({ title: "", columnId: existingColumns.length + 2 });
  };
  return {
    column,
    handleChange,
    handleSubmit
};
}
export default useColumnForm;