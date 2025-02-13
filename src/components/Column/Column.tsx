import styles from "@styles/column.module.css";
import Card from "@components/Card/Card";
import { ColumnProps, TaskProps } from "@/types/types";

type Column = {
  columns: ColumnProps[];
  columnTitle: string;
  tasks: TaskProps[];
  editTask: (task: TaskProps) => void;
  deleteTask: (taskId: number) => void;
};

const Column = ({
  columns,
  columnTitle,
  tasks,
  editTask,
  deleteTask,
}: Column) => {
  //console.log("Column render tasks:", tasks);
  return (
    <div className={styles.column}>
      <h1>{columnTitle}</h1>
      <div className={styles.task_zone}>
        {tasks.map((task: TaskProps) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            body={task.body}
            columnId={task.columnId}
            editTask={editTask}
            deleteTask={deleteTask}
            columns={columns}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
