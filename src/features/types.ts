export interface TaskItem {
    content: string;
    status: "toDo" | "done";
    id: number | string;
}