import { useDispatch, useSelector } from "react-redux";
import { Container, List, Task, Button, Content } from "./styled";
import { selectTasksState, removeTask, toggleTaskDone, selectTasksByQuery } from "../../tasksSlice";
import { TaskLink } from "./styled";
import { useQueryParameters } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";

const TasksList = () => {
    const query = useQueryParameters(searchQueryParamName);
    const tasksTable = useSelector(state => selectTasksByQuery(state, query));
    const { hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();

    const isTaskDone = index => tasksTable[index].status === "done";

    return (
        <Container>
            <List>
                {tasksTable.map((task, taskIndex) => (
                    <Task
                        $hide={hideDone ? (isTaskDone(taskIndex)) : false}
                        key={task.id}>
                        <Button
                            onClick={() => dispatch(toggleTaskDone(taskIndex))}
                            $checkmark={isTaskDone(taskIndex)}
                        >
                        </Button>
                        <Content>
                            <TaskLink
                                to={`/zadania/${task.id}`}
                                $lineThrough={isTaskDone(taskIndex)}
                            >
                                {task.content}
                            </TaskLink>
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

export default TasksList;
