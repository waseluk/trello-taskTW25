import Column from "../Column/Column";
import styles from "./board.module.css";

const Board = () => {
  return (
    <div className={styles.board}>
      <Column />
    </div>
  );
};

export default Board;
