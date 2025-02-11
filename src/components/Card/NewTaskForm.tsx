import useTaskForm from "../../hooks/useTaskForm";

//types

const NewTaskForm = ({ addNewTask, columnId }) => {
  const { task, handleChange } = useTaskForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...task, id: Date.now(), columnId };
    addNewTask(newTask);
    console.log(newTask);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={task.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
          id="title"
          required
        />
        <br></br>
        <label htmlFor="body">Body</label>
        <input
          type="text"
          value={task.body}
          name="body"
          placeholder="Body"
          onChange={handleChange}
          id="body"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewTaskForm;
