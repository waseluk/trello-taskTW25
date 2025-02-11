import { useState } from 'react';

const useTaskForm = () => {
    const [task, setTask] = useState({
        title: "",
        body: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prevTask => ({
            ...prevTask,
            [name]: value,
        }));
    };

    return {
        task,
        handleChange,
    };
};

export default useTaskForm;
