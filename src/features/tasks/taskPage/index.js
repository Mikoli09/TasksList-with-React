import Section from "../../../common/Section";
import { MainContainer } from "../../../common/MainContainer/styled";
import { MainHeader } from "../../../common/MainHeader/styled";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { selectTaskById } from "../tasksSlice";
import { TaskPageParagraph } from "./styled";
import { TaskPageHeader } from "./TaskPageHeader";

const TaskPage = () => {
    const params = useParams();
    const task = useSelector((state) => selectTaskById(state, params.id));

    const paragraphContent = (task) => (
        task ? `Ukończone: ${task.status === "done" ? "TAK" : "NIE"}` : "😒"
    );

    return (
        <MainContainer>
            <MainHeader>
                Szczegóły zadania
            </MainHeader>
            <Section
                headerContent={
                    <TaskPageHeader task={task || undefined} />
                }
                sectionContent={
                    <TaskPageParagraph>{paragraphContent(task)}</TaskPageParagraph>
                }
            />
        </MainContainer>
    )
};

export default TaskPage;
