import { useHistory } from "react-router-dom";
import { HeaderButton } from "../../../../common/HeaderButton/styled";
import { HeaderContainer } from "../../../../common/HeaderContainer/styled";
import { HeaderSpan } from "../../../../common/HeaderContainer/styled";
import { TaskItem } from "../../../types";

interface TaskPageHeaderProps {
    task?: TaskItem
}

export const TaskPageHeader = ({ task }: TaskPageHeaderProps) => {
    const history = useHistory();

    return (
        <HeaderContainer>
            <HeaderSpan>{task ? task.content : "Nie znaleziono zadania"}</HeaderSpan>
            <HeaderButton onClick={() => history.push(`/zadania`)}> Wstecz</HeaderButton>
        </HeaderContainer>
    )
};