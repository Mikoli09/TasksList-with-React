import "./style.css";


const ListHeader = ({ tasks, toggleHideDone, hideDone, toggleAllDone }) => {
    const headerButtonVisibility = (tasksTable) => tasksTable.length !== 0 ? "" : "task__hidden";
    const everyTaskFinished = (tasksTable) => tasksTable.every(({ status }) => status === "done");

    return (<div className="header__container">
        <span className="header__span">Lista zadań</span>
        <button
            className={`header__button ${headerButtonVisibility(tasks)}`}
            onClick={toggleHideDone}
        >{hideDone ? "Pokaż ukryte" : "Ukryj ukończone"}
        </button>
        <button
            className={`header__button ${headerButtonVisibility(tasks)}`}
            onClick={toggleAllDone}
            disabled={everyTaskFinished(tasks)}
        >Ukończ wszystkie
        </button>
    </div>
    );
}
export default ListHeader