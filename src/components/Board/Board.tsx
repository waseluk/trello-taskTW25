import { useState } from "react";
import Column from "../Column/Column";
import NewTaskForm from "../Card/NewTaskForm";
import NewColumnForm from "../Column/NewColumnForm";
import styles from "./board.module.css";

const Board = () => {
  const [columns, setColumns] = useState([
    { id: 1, title: "Waiting", columnId: 1 },
    { id: 2, title: "In Progress", columnId: 2 },
    { id: 3, title: "Completed", columnId: 3 },
  ]);
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const getTasksForColumn = (columnId) => {
    return tasks.filter((task) => task.columnId === columnId);
  };

  const addNewColumn = (newColumn) => {
    setColumns((prevColumns) => [...prevColumns, newColumn]);
  };

  return (
    <div className={styles.board}>
      <NewTaskForm addNewTask={addNewTask} />

      <NewColumnForm addNewColumn={addNewColumn} existingColumns={columns} />

      {columns.map((column) => (
        <Column
          key={column.id}
          columnTitle={column.title}
          columnId={column.columnId}
          tasks={getTasksForColumn(column.columnId)}
          addNewTask={addNewTask}
        />
      ))}
    </div>
  );
};

export default Board;
