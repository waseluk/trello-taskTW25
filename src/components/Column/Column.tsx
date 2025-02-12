import styles from "./column.module.css";
import Card from "../Card/Card";

const Column = ({ columnId, columnTitle, tasks, editTask, deleteTask }) => {
  console.log("Column render, tasks:", tasks);
  return (
    <div className={styles.column}>
      <h1>{columnTitle}</h1>
      <div className={styles.task_zone}>
        {tasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            body={task.body}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
