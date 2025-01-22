
import Form from "./Form";
import Tasks from "./Tasks";
import ListHeader from "./ListHeader";
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
        headerContent={<ListHeader tasks={tasksTable} hideDoneTasks={hideDoneTasks} />}
        sectionContent={<Tasks tasks={tasksTable} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
