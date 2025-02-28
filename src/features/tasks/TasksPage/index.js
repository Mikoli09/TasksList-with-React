import Form from "../TasksPage/Form/index";
import TaskList from "../TasksPage/TaskList/index";
import ListHeader from "../TasksPage/ListHeader/index";
import Section from "../../../common/Section";
import { MainContainer } from "../../../GlobalStyle";
import { MainHeader } from "../../../common/MainHeader/styled";
import Search from "./Search";

const TasksPage = () => {

  return (
    <MainContainer>
      <MainHeader>
        Lista zadań
      </MainHeader>
      <Section
        headerContent={"Dodaj nowe zadanie"}
        sectionContent={<Form />}
      />
      <Section
        headerContent={"Wyszukiwarka"}
        sectionContent={<Search />}
      />
      <Section
        headerContent={<ListHeader />}
        sectionContent={<TaskList />}
      />
    </MainContainer>
  )
};

export default TasksPage;
