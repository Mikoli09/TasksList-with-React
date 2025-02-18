import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasksTable: [],
        hideDone: false,
    },
    reducers: {
        addNewTask: ({ tasksTable }, { payload }) => {
            tasksTable.push(payload);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        removeTasks: ({ tasksTable }, { payload }) => {
            tasksTable.splice(payload, 1);
        },
        toggleTaskDone: ({ tasksTable }, { payload }) => {
            const task = tasksTable[payload];
            task.status = task.status === "toDo" ? "done" : "toDo";
        },
        setAllDone: ({ tasksTable }) => {
            tasksTable.forEach(task => task.status = "done");
        },
    }
});

export const { addNewTask, toggleHideDone, removeTasks, toggleTaskDone, setAllDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;

