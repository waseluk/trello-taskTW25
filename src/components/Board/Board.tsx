import Column from "../Column/Column";
import styles from "./board.module.css";

const Board = () => {
  return (
    <div className={styles.board}>
      <Column columnTitle="Waiting" columnId={1} />
      <Column columnTitle="In Progress" columnId={2} />
      <Column columnTitle="Completed" columnId={3} />
    </div>
  );
};

export default Board;
