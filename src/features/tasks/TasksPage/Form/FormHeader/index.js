import { useDispatch, useSelector } from "react-redux";
import { HeaderContainer, HeaderSpan, HeaderButton } from "../../TasksList/TasksListHeader/styled";
import { fetchExampleTasks, selectTasksState } from "../../../tasksSlice";


export const FormHeader = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(selectTasksState);

    return (
        <HeaderContainer>
            <HeaderSpan>Dodaj nowe zadanie</HeaderSpan>
            <HeaderButton
                onClick={() => dispatch(fetchExampleTasks())}
            >
                {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </HeaderButton>
        </HeaderContainer>
    )
};