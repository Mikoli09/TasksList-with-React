import Form from "./Form";
import Tasks from "./Tasks";
import ListHeader from "./ListHeader";
import Section from "./Section";
import MainHeader from "./MainHeader";
import Container from "./Container";
import { useState } from "react";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);
  
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const { tasksTable,
    setAllDone,
    removeTasks,
    toggleTaskDone,
    addNewTask
  } = useTasks();

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
