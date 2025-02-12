import { useState } from "react";
// this was the buggar!! const { handleAddTask } = useTaskReducer();

const NewTaskForm = ({ addNewTask }) => {
  const [task, setTask] = useState({ title: "", body: "", columnId: 1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.body) {
      console.log("Adding task:", task);
      addNewTask(task.title, task.body, task.columnId);
      setTask({ title: "", body: "", columnId: 1 });
    }
  };

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
