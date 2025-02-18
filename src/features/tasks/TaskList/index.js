import { Container, List, Task, Button, Content } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, removeTasks, toggleTaskDone } from "../tasksSlice";

const TaskList = () => {
    const { tasksTable, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <Container>
            <List>
                {tasksTable.map((task, index) => (
                    <Task
                        $hide={hideDone ? (task.status === "done") : false}
                        key={task.id}>
                        <Button
                            onClick={() => dispatch(toggleTaskDone(index))}
                            $checkmark={task.status === "done"}
                        >
                        </Button>
                        <Content
                            $lineThrough={task.status === "done"}
                        >
                            {task.content}
                        </Content>
                        <Button
                            onClick={() => dispatch(removeTasks(index))}
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
