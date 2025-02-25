import Form from "./Form";
import TaskList from "./TaskList";
import ListHeader from "./ListHeader";
import Section from "../../common/Section";
import { MainContainer } from "../../GlobalStyle";
import { MainHeader } from "../../common/MainHeader/styled";

const Tasks = () => (
  <MainContainer>
    <MainHeader>
      Lista zadań
    </MainHeader>
    <Section
      headerContent={"Dodaj nowe zadanie"}
      sectionContent={<Form />}
    />
    <Section
      headerContent={<ListHeader />}
      sectionContent={<TaskList />}
    />
  </MainContainer>
);

export default Tasks;
