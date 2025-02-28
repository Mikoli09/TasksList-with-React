const localStorageKey = "tasksTable";

export const saveTasksInLocalStorage = tasksTable =>
    localStorage.setItem(localStorageKey, JSON.stringify(tasksTable));

export const getTasksFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) || [];