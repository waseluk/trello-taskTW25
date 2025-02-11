import styles from "./column.module.css";
import Card from "../Card/Card";

const Column = ({ columnTitle, tasks }) => {
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
            columnId={task.column}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
