import { useReducer } from "react";

const initialState = {
    //local storage
    tasks: [],
  };
  
  const Action = {
    ADD_TASK: "AddTask",
    REMOVE_TASK: "RemoveTask",
    EDIT_TASK: "EditTask",
  };
  
  function reducer(taskState, action) {
    switch (action.type) {
      case Action.ADD_TASK:
        return { tasks: [...taskState.tasks, action.newTask] };
      case Action.REMOVE_TASK:
        return {
          tasks: taskState.tasks.filter((task) => task.id !== action.taskId),
        };
      case Action.EDIT_TASK:
        return {
          notes: taskState.notes.map((task) =>
            task.id === action.editTask.id ? action.editTask : task
          ),
        };
  
      default:
    }
  }
const useTaskReducer = () => {
    const [taskState, dispatch] = useReducer(reducer, initialState)
  //const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  function handleAddTask(title, body) {
    const newTask = {
      id: taskState.tasks.length + 1,
      title,
      body
    };

    dispatch({
      type: Action.ADD_Task,
      newTask,
    });
  }

  function handleRemoveTask(taskId) {
    dispatch({
      type: Action.REMOVE_TASK,
      taskId,
    });
  }

  function handleEditTask(taskId) {
    const taskToEdit = taskState.tasks.find((task) => task.id === taskId);
    setTask(taskToEdit);
    setIsEditing(true);
    const editedTask = {
      id: taskId,
      //this is not implemented correctly as body should be the only edited.
      title: task,
      body: task
    };
    if (isEditing) {
      dispatch({
        type: Action.EDIT_TASK,
        editTask: editedTask,
      });
    } else {
      setIsEditing(false);
    }
    setTask("");
  }
  return {
    tasks: taskState.tasks,
    handleAddTask,
    handleEditTask,
    handleRemoveTask
    
  };

} 
export default useTaskReducer;