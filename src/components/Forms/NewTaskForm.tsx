import useTaskForm from "@hooks/useTaskForm";
import { TaskProps } from "@/types/types";
// this was the buggar!! const { handleAddTask } = useTaskReducer();

const NewTaskForm = ({ addNewTask }: TaskProps[]) => {
  const { task, handleChange, handleSubmit } = useTaskForm(addNewTask);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="body">Body</label>
      <input
        type="text"
        name="body"
        value={task.body}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
