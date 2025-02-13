import { useState } from "react";
import { NewTaskFormProps } from "../types/types";
const useTaskForm = (addNewTask: NewTaskFormProps[]) => {
const [task, setTask] = useState({ title: "", body: "", columnId: 1 });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (task.title && task.body) {
      //console.log("Adding task:", task);
      addNewTask(task.title, task.body, task.columnId);
      setTask({ title: "", body: "", columnId: 1 });
    }
  };
  return {task, handleChange, handleSubmit};
}
 export default useTaskForm;