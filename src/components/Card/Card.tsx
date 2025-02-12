import { useState } from "react";
import styles from "./card.module.css";

export default function Card({
  id,
  columnId,
  title,
  body,
  editTask,
  deleteTask,
}) {
  const [task, setTask] = useState(body);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = () => {
    const updatedTask = { id, title, body: task, columnId };
    editTask(updatedTask);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      {!isEditing ? (
        <p>{body}</p>
      ) : (
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      )}
      <button onClick={handleEdit}>{isEditing ? "Cancel" : "Edit"}</button>
      {isEditing && <button onClick={handleSave}>Save</button>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
