import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasksTable: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addNewTask: ({ tasksTable }, { payload: newTask }) => {
            tasksTable.push(newTask);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        removeTask: ({ tasksTable }, { payload: taskIndex }) => {
            tasksTable.splice(taskIndex, 1);
        },
        toggleTaskDone: ({ tasksTable }, { payload: taskIndex }) => {
            const task = tasksTable[taskIndex];
            task.status = task.status === "toDo" ? "done" : "toDo";
        },
        setAllDone: ({ tasksTable }) => {
            tasksTable.forEach(task => task.status = "done");
        },
        fetchExampleTasks: () => {
        },
        setTasks: (state, { payload: exampleTasks }) => {
            state.tasksTable = exampleTasks;
        },
    }
});

export const { addNewTask, toggleHideDone, removeTask, toggleTaskDone, setAllDone, fetchExampleTasks, setTasks } = tasksSlice.actions;
export const selectTasksState = ({ tasks }) => tasks;
export const selectTasksTable = state => state.tasks.tasksTable;
export const selectAllTasksDone = ({ tasks: { tasksTable } }) => tasksTable.every(task => task.status === "done");
export const selectTasksTableEmpty = ({ tasks: { tasksTable } }) => tasksTable.length === 0;
export const selectTaskById = (state, taskId) => selectTasksTable(state).find((task) => task.id === taskId);
export const selectTasksByQuery = (state, query) => {
    const tasksTable = selectTasksTable(state);
    if (!query || query.trim() === "") {
        return tasksTable;
    }

    return tasksTable.filter((task) =>
        task.content.toUpperCase().includes(query.trim().toUpperCase()))
};


export default tasksSlice.reducer;