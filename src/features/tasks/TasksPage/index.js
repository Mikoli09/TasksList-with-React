import Form from "./Form/index";
import TasksList from "./TasksList/index";
import TasksListHeader from "./TasksList/TasksListHeader";
import Section from "../../../common/Section";
import { MainContainer } from "../../../GlobalStyle";
import { MainHeader } from "../../../common/MainHeader/styled";
import Search from "./Search";
import { FormHeader } from "./Form/FormHeader";

const TasksPage = () => {

  return (
    <MainContainer>
      <MainHeader>
        Lista zadań
      </MainHeader>
      <Section
        headerContent={<FormHeader />}
        sectionContent={<Form />}
      />
      <Section
        headerContent={"Wyszukiwarka"}
        sectionContent={<Search />}
      />
      <Section
        headerContent={<TasksListHeader />}
        sectionContent={<TasksList />}
      />
    </MainContainer>
  )
};

export default TasksPage;
