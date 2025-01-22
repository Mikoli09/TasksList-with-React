
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import MainHeader from "./MainHeader";
import Container from "./Container";
import tasksTable from "./data/exampleTasks";

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <MainHeader
        title={"Lista zadań"}
      />
      <Section
        headerContent={"Dodaj nowe zadanie"}
        sectionContent={<Form />}
      />
      <Section
        headerContent={<Buttons tasks={tasksTable} hideDoneTasks={hideDoneTasks} />}
        sectionContent={<Tasks tasks={tasksTable} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
