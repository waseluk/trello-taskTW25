import Column from "@components/Column/Column";
import NewTaskForm from "@components/Forms/NewTaskForm";
import NewColumnForm from "@components/Forms/NewColumnForm";
import styles from "@styles/board.module.css";
import { ColumnProps, TaskProps } from "@/types/types";

import useTaskReducer from "@hooks/useTaskReducer";
import useLocalStorageColumns from "@hooks/useLocalStorageColumns";

const initialColumns: ColumnProps[] = [
  { id: 1, title: "Waiting", columnId: 1 },
  { id: 2, title: "In Progress", columnId: 2 },
  { id: 3, title: "Completed", columnId: 3 },
];

const Board = () => {
  const { tasks, handleAddTask, handleEditTask, handleRemoveTask } =
    useTaskReducer();

  const [columns, setColumns] = useLocalStorageColumns(
    "columns",
    initialColumns
  );
  const getTasksForColumn = (columnId: number) => {
    const filteredTasks = tasks.filter(
      (task: TaskProps) => task.columnId === columnId
    );
    //console.log(`Tasks for column ${columnId}:`, filteredTasks);
    return filteredTasks;
  };

  /*useEffect(() => {
    //console.log("Updated tasks:", tasks);
  }, [tasks]);*/
  //add column
  const addNewColumn = (newColumn: ColumnProps) => {
    setColumns((prevColumns: ColumnProps[]) => [...prevColumns, newColumn]);
  };
  //console.log(tasks);
  return (
    <div className={styles.board}>
      <NewTaskForm addNewTask={handleAddTask} />

      <NewColumnForm addNewColumn={addNewColumn} existingColumns={columns} />
      {columns.map((column: ColumnProps) => (
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

//const savedColumns = JSON.parse(localStorage.getItem("columns") || "null");

/*const [columns, setColumns] = useState(() => {
    return savedColumns && savedColumns.length > 0
      ? savedColumns
      : initialColumns;
  }); 
  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]); */

//this is for singular useTasks
//const { tasks, addNewTask, editTask, deleteTask } = useTasks();
//reducer

//console.log("Rendering Board, current tasks:", tasks);
