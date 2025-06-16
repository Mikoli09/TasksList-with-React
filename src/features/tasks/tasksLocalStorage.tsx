import { TaskItem } from "../types";

const localStorageKey: string = "tasksTable";

export const saveTasksInLocalStorage = (tasksTable: TaskItem[]): void =>
    localStorage.setItem(localStorageKey, JSON.stringify(tasksTable));

export const getTasksFromLocalStorage = (): TaskItem[] => {
    const tasksJson = localStorage.getItem(localStorageKey);
    return tasksJson ? JSON.parse(tasksJson) : [];
};