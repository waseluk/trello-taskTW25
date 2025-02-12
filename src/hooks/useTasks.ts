import { useReducer } from "react";
//usereducer
const initialState = {
  //local storage
  tasks: [],
};

const Action = {
  ADD_TASK: "AddTask",
  REMOVE_TASK: "RemoveTask",
  EDIT_TASK: "EditTask",
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};


const useTasks = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addNewTask = (newTask) => {
    dispatch({ type: "ADD_TASK", payload: newTask });
  };


  const editTask = (editedTask) => {
    dispatch({ type: "EDIT_TASK", payload: editedTask });
  };


  const deleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: { id: taskId } });
  };

  return {
    tasks: state.tasks,
    addNewTask,
    editTask,
    deleteTask,
  };
};

export default useTasks;
