import "./style.css";


const ListHeader = ({ tasks, hideDone }) => {
    const headerButtonVisibility = (tasksTable) => tasksTable.length !== 0 ? "" : "task__hidden";
    const textSwap = (hideDone) => hideDone ? "Pokaż ukryte" : "Ukryj ukończone";
    const everyTaskFinished = (tasksTable) => {
        const checkIfAllDone = ({ status }) => status === "done";
        return tasksTable.every(checkIfAllDone) ? true : false;
    };


    return (<div className="header__container">
        <span className="header__span">Lista zadań</span>
        <button className={`header__button ${headerButtonVisibility(tasks)}`}>{textSwap(hideDone)}</button>
        <button disabled={everyTaskFinished(tasks)} className={`header__button ${headerButtonVisibility(tasks)}`}>Ukończ wszystkie</button>
    </div>
    );
}
export default ListHeader