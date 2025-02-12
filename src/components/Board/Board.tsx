import { useState, useEffect } from "react";
import Column from "../Column/Column";
import NewTaskForm from "../Card/NewTaskForm";
import NewColumnForm from "../Column/NewColumnForm";
import styles from "./board.module.css";

//import useTasks from "../../hooks/useTasks";
import useTaskReducer from "../../hooks/useTaskReducer";

const Board = () => {
  const { tasks, handleAddTask, handleEditTask, handleRemoveTask } =
    useTaskReducer();
  const [columns, setColumns] = useState([
    { id: 1, title: "Waiting", columnId: 1 },
    { id: 2, title: "In Progress", columnId: 2 },
    { id: 3, title: "Completed", columnId: 3 },
  ]);
  //this is for singular useTasks
  //const { tasks, addNewTask, editTask, deleteTask } = useTasks();
  //reducer

  console.log("Rendering Board, current tasks:", tasks);
  const getTasksForColumn = (columnId) => {
    const filteredTasks = tasks.filter((task) => task.columnId === columnId);
    console.log(`Tasks for column ${columnId}:`, filteredTasks);
    return filteredTasks;
  };

  useEffect(() => {
    console.log("Updated tasks:", tasks);
  }, [tasks]);
  //add column
  const addNewColumn = (newColumn) => {
    setColumns((prevColumns) => [...prevColumns, newColumn]);
  };
  console.log(tasks);
  return (
    <div className={styles.board}>
      <NewTaskForm addNewTask={handleAddTask} />

      <NewColumnForm addNewColumn={addNewColumn} existingColumns={columns} />
      {columns.map((column) => (
        <Column
          key={column.id}
          columnTitle={column.title}
          columnId={column.columnId}
          tasks={getTasksForColumn(column.columnId)}
          editTask={handleEditTask}
          deleteTask={handleRemoveTask}
          columns={columns}
        />
      ))}
    </div>
  );
};

export default Board;
