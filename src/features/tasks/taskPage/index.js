import Section from "../../../common/Section";
import { MainContainer } from "../../../GlobalStyle";
import { MainHeader } from "../../../common/MainHeader/styled";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { selectTaskById } from "../tasksSlice";

const TaskPage = () => {
    const params = useParams();
    const task = useSelector((state) => selectTaskById(state, params.id));

    return (
        <MainContainer>
            <MainHeader>
                Szczegóły zadania
            </MainHeader>
            <Section
                headerContent={task ? task.content : "Nie zanaleziono zadania"}
                sectionContent={<>TEKST - moze byc informacja ze ukonczono albo cos takiego</>}
            />
        </MainContainer>
    )
};

export default TaskPage;
