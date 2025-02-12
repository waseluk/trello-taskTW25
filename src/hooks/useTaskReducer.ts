import { useReducer } from "react";

const initialState = {
  tasks: [],
};

const Action = {
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  EDIT_TASK: "EDIT_TASK",
};

function reducer(taskState, action) {
    switch (action.type) {
      case Action.ADD_TASK:
        return {
          ...taskState, 
          tasks: [...taskState.tasks, action.newTask], 
        };
  
      case Action.REMOVE_TASK:
        return {
          ...taskState,
          tasks: taskState.tasks.filter((task) => task.id !== action.taskId),
        };
  
      case Action.EDIT_TASK:
        return {
          ...taskState,
          tasks: taskState.tasks.map((task) =>
            task.id === action.editTask.id ? action.editTask : task
          ),
        };
  
      default:
        return taskState;
    }
  }

const useTaskReducer = () => {
    const [taskState, dispatch] = useReducer(reducer, initialState);
  
    console.log("Current tasks in useTaskReducer:", taskState.tasks); 
  
    function handleAddTask(title, body) {
      const newTask = {
        id: taskState.tasks.length + 1, 
        title,
        body,
        columnId: 1,  
      };

      console.log("addingtask", newTask);
  
      dispatch({
        type: Action.ADD_TASK, 
        newTask,
      });

      console.log("Updated tasks after dispatch:", taskState.tasks);
    }
  
    function handleRemoveTask(taskId) {
      dispatch({
        type: Action.REMOVE_TASK,
        taskId,
      });
    }
  
    function handleEditTask(updatedTask) {
      dispatch({
        type: Action.EDIT_TASK,
        editTask: updatedTask,
      });
    }
  
    return {
      tasks: taskState.tasks,
      handleAddTask,
      handleEditTask,
      handleRemoveTask,
    };
  };
  
  export default useTaskReducer;
  