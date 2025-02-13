export type CardProps = {
    id: number;
    title: string;
    body: string;
    columnId: number;
    columns: ColumnProps[];
    editTask: (task: TaskProps) => void;
    deleteTask: (taskId: number) => void;
}

export type TaskProps = {
    id: number;
    title: string;
    body: string;
    columnId: number;
}

export type ColumnProps = {
    id: number;
    title: string;
    columnId: number;
}

export type NewTaskFormProps = {
    addNewTask: (title: string, body: string, columnId: number) => void;
    
}

export type NewColumnFormProps = {
    existingColumns: ColumnProps[];
    addNewColumn: (newColumn: ColumnProps) => void;
}
