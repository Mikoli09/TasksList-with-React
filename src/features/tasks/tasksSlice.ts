import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";
import { TaskItem } from "../types";
import { RootState } from "../../store";

interface tasksState {
    tasksTable: TaskItem[],
    hideDone: boolean,
    loading: boolean,
}

const initialState: tasksState = {
    tasksTable: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addNewTask: (state, action: PayloadAction<TaskItem>) => {
            state.tasksTable.push(action.payload);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        setLoadingFalse: (state) => {
            state.loading = false;
        },
        removeTask: (state, action: PayloadAction<number>) => {
            state.tasksTable.splice(action.payload, 1);
        },
        toggleTaskDone: (state, action: PayloadAction<number>) => {
            const task = state.tasksTable[action.payload];
            task.status = task.status === "toDo" ? "done" : "toDo";
        },
        setAllDone: (state) => {
            state.tasksTable.forEach(task => task.status = "done");
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        setTasks: (state, action: PayloadAction<TaskItem[]>) => {
            state.tasksTable = action.payload;
        },
    }
});

export const { addNewTask, toggleHideDone, setLoadingFalse, removeTask, toggleTaskDone, setAllDone, fetchExampleTasks, setTasks } = tasksSlice.actions;
export const selectTasksState = (state: RootState) => state.tasks;
export const selectTasksTable = (state: RootState) => state.tasks.tasksTable;
export const selectAllTasksDone = (state: RootState) => state.tasks.tasksTable.every(task => task.status === "done");
export const selectTasksTableEmpty = (state: RootState) => state.tasks.tasksTable.length === 0;
export const selectTaskById = (state: RootState, taskId: number | string) => selectTasksTable(state).find((task) => task.id === taskId);
export const selectTasksByQuery = (state: RootState, query: string) => {
    const tasksTable = selectTasksTable(state);
    if (!query || query.trim() === "") {
        return tasksTable;
    }

    return tasksTable.filter((task) =>
        task.content.toUpperCase().includes(query.trim().toUpperCase()))
};

export default tasksSlice.reducer;