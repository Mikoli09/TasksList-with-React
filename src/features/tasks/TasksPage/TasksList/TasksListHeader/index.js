import { useDispatch, useSelector } from "react-redux";
import { HeaderContainer, HeaderSpan } from "./styled";
import { selectTasksState, toggleHideDone, setAllDone, selectAllTasksDone, selectTasksTableEmpty} from "../../../tasksSlice";
import { HeaderButton } from "../../../../../common/HeaderButton/styled";

const TasksListHeader = () => {
    const { hideDone } = useSelector(selectTasksState);
    const allTasksDone = useSelector(selectAllTasksDone);
    const tasksTableEmpty = useSelector(selectTasksTableEmpty);
    const dispatch = useDispatch();

    return (
        <HeaderContainer>
            <HeaderSpan>Lista zadań</HeaderSpan>
            <HeaderButton
                $notVisible={tasksTableEmpty}
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </HeaderButton>
            <HeaderButton
                $notVisible={tasksTableEmpty}
                disabled={allTasksDone}
                onClick={() => dispatch(setAllDone())}
            >Ukończ wszystkie
            </HeaderButton>
        </HeaderContainer>
    )
};

export default TasksListHeader