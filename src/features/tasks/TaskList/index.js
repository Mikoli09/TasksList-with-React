import { Container, List, Task, Button, Content } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectTasksState, removeTask, toggleTaskDone } from "../tasksSlice";

const TaskList = () => {
    const { tasksTable, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();

    const isTaskDone = index => tasksTable[index].status === "done";

    return (
        <Container>
            <List>
                {tasksTable.map((task, taskIndex) => (
                    <Task
                        // $hide={hideDone ? (task.status === "done") : false}
                        $hide={hideDone ? (isTaskDone(taskIndex)) : false}

                        key={task.id}>
                        <Button
                            onClick={() => dispatch(toggleTaskDone(taskIndex))}
                            $checkmark={isTaskDone(taskIndex)}
                        >
                        </Button>
                        <Content
                            $lineThrough={isTaskDone(taskIndex)}
                        >
                            {task.content}
                        </Content>
                        <Button
                            onClick={() => dispatch(removeTask(taskIndex))}
                            $remove
                        >
                        </Button>
                    </Task>
                ))}
            </List>
        </Container>
    )
};

export default TaskList;
