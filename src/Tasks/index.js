import { Container, List, Task, Button, Content } from "./styled";


const Tasks = ({ tasksTable, hideDone, removeTasks, toggleTaskDone }) => {

    return (
        <Container>
            <List>
                {tasksTable.map(task => (
                    <Task
                        hide={hideDone ? (task.status === "done") : false}
                        key={task.id}>
                        <Button
                            onClick={() => toggleTaskDone(task.id)}
                            checkmark={task.status === "done"}
                        >
                        </Button>
                        <Content
                            lineThrough={task.status === "done"}
                        >
                            {task.content}
                        </Content>
                        <Button
                            onClick={() => removeTasks(task.id)}
                            remove
                        >
                        </Button>
                    </Task>
                ))}
            </List>
        </Container>
    )
};

export default Tasks;
