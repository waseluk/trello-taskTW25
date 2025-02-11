import { useState } from 'react';

const useTaskForm = ({addNewTask}) => {
    const [task, setTask] = useState({ title: "", body: "", columnId: 1 });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newTask = { ...task, id: Date.now() };
      addNewTask(newTask);
  
      setTask({ title: "", body: "", columnId: 1 });
    };
  

    return {
        task,
        handleChange,
        handleSubmit,
    };
};

export default useTaskForm;
