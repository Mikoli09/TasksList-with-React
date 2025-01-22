
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import MainHeader from "./MainHeader";
import Container from "./Container";

const tasksTable = [
  { id: 1, content: "przejść na Reacta", status: "toDo" },
  { id: 2, content: "zjeść obiad", status: "done" },
  { id: 3, content: "zrobić kolacje", status: "done" },
];
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
