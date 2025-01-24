import Form from "./Form";
import Tasks from "./Tasks";
import ListHeader from "./ListHeader";
import Section from "./Section";
import MainHeader from "./MainHeader";
import Container from "./Container";
import tasksTable from "./data/exampleTasks";
import { useState } from "react";


function App() {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

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
        headerContent={<ListHeader tasks={tasksTable} toggleHideDone={toggleHideDone} hideDone={hideDone} />}
        sectionContent={<Tasks tasks={tasksTable} toggleHideDone={toggleHideDone} />}
      />
    </Container>
  );
}

export default App;
