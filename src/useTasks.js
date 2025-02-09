import { useEffect, useState } from "react";

export const useTasks = () => {
    const getStoredTasks = () => {
        const storedTasks = localStorage.getItem("localStorageTasksTable");

        return (
            storedTasks ? JSON.parse(storedTasks) : []
        )
    };

    const [tasksTable, setTasks] = useState(getStoredTasks);

    useEffect(() => {
        localStorage.setItem("localStorageTasksTable", JSON.stringify(tasksTable));

    }, [tasksTable]);

    const setAllDone = () => {
        setTasks(tasksTable =>
            tasksTable.map((tableElement) => ({
                ...tableElement,
                status: "done"
            })));
    };

    const removeTasks = (id) => {
        setTasks((tasksTable) => tasksTable.filter((elementOfTable) => elementOfTable.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks((tasksTable) => tasksTable.map((task) => {
            if (task.id === id) {
                return { ...task, status: task.status === "toDo" ? "done" : "toDo" }
            }
            return task;
        }))
    };

    const addNewTask = (newTaskContent) => {
        setTasks((tasksTable) => [
            ...tasksTable,
            {
                content: newTaskContent,
                status: "toDo",
                id: tasksTable.length === 0 ? 1 : tasksTable[tasksTable.length - 1].id + 1
            }
        ])
    };

    return { tasksTable, setAllDone, removeTasks, toggleTaskDone, addNewTask };
};