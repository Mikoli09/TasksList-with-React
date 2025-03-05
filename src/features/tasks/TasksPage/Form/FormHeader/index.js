import { useDispatch, useSelector } from "react-redux";
import { HeaderContainer, HeaderSpan } from "../../TasksList/TasksListHeader/styled";
import { fetchExampleTasks, selectTasksState } from "../../../tasksSlice";
import { HeaderButton } from "../../../../../common/HeaderButton/styled";

export const FormHeader = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(selectTasksState);

    return (
        <HeaderContainer>
            <HeaderSpan>Dodaj nowe zadanie</HeaderSpan>
            <HeaderButton
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading}
            >
                {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </HeaderButton>
        </HeaderContainer>
    )
};