import Form from "./Form";
import TaskList from "./TaskList";
import ListHeader from "./ListHeader";
import Section from "../../common/Section";
import MainHeader from "../../common/MainHeader";
import Container from "../../common/Container";

function Tasks() {

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
        headerContent={<ListHeader />}
        sectionContent={<TaskList />}
      />
    </Container>
  );
}

export default Tasks;
