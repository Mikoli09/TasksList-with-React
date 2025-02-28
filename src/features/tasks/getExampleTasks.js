export const getExampleTasks = async () => {
    const response = await fetch("/TasksList-with-React/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};

