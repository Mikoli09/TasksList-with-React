import "./style.css";


const ListHeader = ({ tasks, hideDoneTasks }) => {
    const headerButtonVisibility = (tasksTable) => tasksTable.length !== 0 ? "" : "task__hidden";
    const textSwap = (hideDoneTasks) => hideDoneTasks ? "Pokaż ukryte" : "Ukryj ukończone";
    const everyTaskFinished = (tasksTable) => {
        const checkIfAllDone = ({ status }) => status === "done";
        return tasksTable.every(checkIfAllDone) ? true : false;
    };


    return (<div className="header__container">
        <span className="header__span">Lista zadań</span>
        <button className={`header__button ${headerButtonVisibility(tasks)}`}>{textSwap(hideDoneTasks)}</button>
        <button disabled={everyTaskFinished(tasks)} className={`header__button ${headerButtonVisibility(tasks)}`}>Ukończ wszystkie</button>
    </div>
    );
}
export default ListHeader