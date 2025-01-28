import Form from "./Form";
import Tasks from "./Tasks";
import ListHeader from "./ListHeader";
import Section from "./Section";
import MainHeader from "./MainHeader";
import Container from "./Container";
import { useState } from "react";


function App() {

  const [hideDone, setHideDone] = useState(false);
  const [tasksTable, setTasks] = useState([]);

  const setAllDone = () => {
    setTasks(tasksTable =>
      tasksTable.map((tableElement) => ({
        ...tableElement,
        status: "done"
      })));
  };

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTasks = (id) => {
    setTasks((tasksTable) => tasksTable.filter((elementOfTable) => elementOfTable.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasksTable) => tasksTable.map((task) => {
      if (task.id === id) {
        return { ...task, status: task.status === "toDo" ? "done" : "toDo" }
      }
      return task;
    }))
  };

  const addNewTask = (newTaskContent) => {
    setTasks((tasksTable) => [
      ...tasksTable,
      {
        content: newTaskContent,
        status: "toDo",
        id: tasksTable.length === 0 ? 1 : tasksTable[tasksTable.length - 1].id + 1
      }
    ])
  };

return (
  <Container>
    <MainHeader
      title={"Lista zadań"}
    />
    <Section
      headerContent={"Dodaj nowe zadanie"}
      sectionContent={<Form addNewTask={addNewTask} />}
    />
    <Section
      headerContent={<ListHeader tasksTable={tasksTable} toggleHideDone={toggleHideDone} hideDone={hideDone} setAllDone={setAllDone} />}
      sectionContent={<Tasks tasksTable={tasksTable} hideDone={hideDone} removeTasks={removeTasks} toggleTaskDone={toggleTaskDone} />}
    />
  </Container>
);
}

export default App;
