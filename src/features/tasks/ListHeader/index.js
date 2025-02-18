import { useDispatch, useSelector } from "react-redux";
import { HeaderContainer, HeaderSpan, HeaderButton } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const ListHeader = () => {
    const { tasksTable, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <HeaderContainer>
            <HeaderSpan>Lista zadań</HeaderSpan>
            <HeaderButton
                $notVisible={tasksTable.length === 0}
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </HeaderButton>
            <HeaderButton
                $notVisible={tasksTable.length === 0}
                disabled={tasksTable.every(({ status }) => status === "done")}
                onClick={() => dispatch(setAllDone())}
            >Ukończ wszystkie
            </HeaderButton>
        </HeaderContainer>
    );
}

export default ListHeader