import { TaskItem } from "../types";

const exampleTasksPath = "/TasksList-with-React/exampleTasks.json";

export const getExampleTasks = async () => {
    const response = await fetch(exampleTasksPath);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return (await response.json()) as TaskItem[];
};

