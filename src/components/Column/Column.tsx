import styles from "./column.module.css";

const Column = () => {
  return (
    <>
      <div className={styles.column}>
        <h1>Waiting</h1>
        <div className={styles.task_zone}></div>
      </div>

      <div className={styles.column}>
        <h1>In Progress</h1>
        <div className={styles.task_zone}></div>
      </div>

      <div className={styles.column}>
        <h1>Finished</h1>
        <div className={styles.task_zone}></div>
      </div>
    </>
  );
};

export default Column;
