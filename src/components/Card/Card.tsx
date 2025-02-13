import React, { useState } from "react";
import styles from "./card.module.css";
import { ColumnProps, CardProps } from "../../types/types";

export default function Card({
  id,
  columnId,
  columns,
  title,
  body,
  editTask,
  deleteTask,
}: CardProps) {
  const [task, setTask] = useState(body);
  const [isEditing, setIsEditing] = useState(false);
  //columnId dropdown state for moving columns?
  const [selectedColumn, setSelectedColumn] = useState(columnId);

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = () => {
    const updatedTask = { id, title, body: task, columnId: selectedColumn }; //fixed ColumnId
    editTask(updatedTask);
    setIsEditing(false);
  };

  const handleColumnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColumnId = Number(event.target.value);
    setSelectedColumn(newColumnId);
    const updatedTask = { id, title, body: task, columnId: newColumnId };
    editTask(updatedTask);
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

      <select value={selectedColumn} onChange={handleColumnChange}>
        {columns.map((column: ColumnProps) => (
          <option key={column.id} value={column.columnId}>
            {column.title}
          </option>
        ))}
      </select>
      <button onClick={handleEdit}>{isEditing ? "Cancel" : "Edit"}</button>
      {isEditing && <button onClick={handleSave}>Save</button>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
