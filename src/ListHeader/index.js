import "./style.css";

const ListHeader = ({ tasksTable, toggleHideDone, hideDone, setAllDone }) => {
    const headerButtonVisibility = (tasksTable) => tasksTable.length !== 0 ? "" : "task__hidden";
    const everyTaskFinished = (tasksTable) => tasksTable.every(({ status }) => status === "done");

    return (
        <div className="header__container">
            <span className="header__span">Lista zadań</span>
            <button
                className={`header__button ${headerButtonVisibility(tasksTable)}`}
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className={`header__button ${headerButtonVisibility(tasksTable)}`}
                onClick={setAllDone}
                disabled={everyTaskFinished(tasksTable)}
            >Ukończ wszystkie
            </button>
        </div>
    );
}
export default ListHeader