import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasksTable: [],
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
    }
});

export const { addNewTask, toggleHideDone, removeTask, toggleTaskDone, setAllDone } = tasksSlice.actions;
export const selectTasksState = ({tasks}) => tasks;
export const selectAllTasksDone = ({tasks: {tasksTable} }) => tasksTable.every(task => task.status ==="done");
export const selectTasksTableEmpty = ({tasks: {tasksTable}}) => tasksTable.length === 0;
export default tasksSlice.reducer;

