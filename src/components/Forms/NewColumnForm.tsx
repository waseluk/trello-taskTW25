import useColumnForm from "../../hooks/useColumnForm";
import { NewColumnFormProps } from "../../types/types";

const NewColumnForm = ({
  addNewColumn,
  existingColumns,
}: NewColumnFormProps) => {
  const { column, handleChange, handleSubmit } = useColumnForm({
    addNewColumn,
    existingColumns,
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Column Title</label>
      <input
        type="text"
        name="title"
        value={column.title}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Column</button>
    </form>
  );
};

export default NewColumnForm;
