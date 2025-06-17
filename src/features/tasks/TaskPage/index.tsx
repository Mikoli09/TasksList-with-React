import Section from "../../../common/Section";
import { MainContainer } from "../../../common/MainContainer/styled";
import { MainHeader } from "../../../common/MainHeader/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTaskById } from "../tasksSlice";
import { TaskPageParagraph } from "./styled";
import { TaskPageHeader } from "./TaskPageHeader";
import { RootState } from "../../../store";
import { TaskItem } from "../../types";

const TaskPage = () => {
    const { id } = useParams<{ id: string }>();
    const task = useSelector((state: RootState) => selectTaskById(state, id));

    const getParagraphContent = (task?: TaskItem) => (
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
                    <TaskPageParagraph>{getParagraphContent(task)}</TaskPageParagraph>
                }
            />
        </MainContainer>
    )
};

export default TaskPage;
