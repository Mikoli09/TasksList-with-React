import { HeaderContainer, HeaderSpan, HeaderButton } from "./styled";


const ListHeader = ({ tasksTable, toggleHideDone, hideDone, setAllDone }) => {

    return (
        <HeaderContainer>
            <HeaderSpan>Lista zadań</HeaderSpan>
            <HeaderButton
                $notVisible={tasksTable.length === 0}
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </HeaderButton>
            <HeaderButton
                $notVisible={tasksTable.length === 0}
                disabled={tasksTable.every(({ status }) => status === "done")}
                onClick={setAllDone}
            >Ukończ wszystkie
            </HeaderButton>
        </HeaderContainer>
    );
}

export default ListHeader