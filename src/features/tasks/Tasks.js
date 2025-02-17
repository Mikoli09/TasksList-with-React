import Form from "./Form";
import TaskList from "./TaskList";
import ListHeader from "./ListHeader";
import Section from "../../common/Section";
import MainHeader from "../../common/MainHeader";
import Container from "../../common/Container";
import { useState } from "react";
import { useTasks } from "../../useTasks";

function Tasks() {
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
        sectionContent={<TaskList tasksTable={tasksTable} hideDone={hideDone} removeTasks={removeTasks} toggleTaskDone={toggleTaskDone} />}
      />
    </Container>
  );
}

export default Tasks;
