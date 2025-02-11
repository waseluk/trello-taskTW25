import { useState } from "react";
import NewTaskForm from "../Card/NewTaskForm";
import styles from "./column.module.css";
import Card from "../Card/Card";

const Column = ({ columnTitle, columnId }) => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  return (
    <>
      <div className={styles.column}>
        <h1>Add new Task</h1>
        <div>
          <NewTaskForm addNewTask={addNewTask} columnId={columnId} />
        </div>
      </div>
      <div className={styles.column}>
        <h1>{columnTitle}</h1>
        <div className={styles.task_zone}>
          {tasks.map((task) => (
            <Card
              key={task.id}
              id={task.id}
              title={task.title}
              body={task.body}
              columnId={task.columnId}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Column;
