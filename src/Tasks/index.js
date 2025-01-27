import "./style.css"


const Tasks = ({ tasks, hideDone, removeTasks, toggleTaskDone }) => {
    const checkIfHide = (elementStatus, variableStatus) => {
        if (!variableStatus) {
            return "";
        }
        return elementStatus === "done" ? " task__hidden" : ""
    };

    const checkmarkVisible = elementStatus => elementStatus === "done" ? "✔" : "";
    const checkIfLineThrough = elementStatus => elementStatus === "done" ? "content__done" : "";

    return (<div className="section__container">
        <ul className="tasks">
            {tasks.map(task => (
                <li key={task.id} className={`task${checkIfHide(task.status, hideDone)}`}>
                    <button
                    onClick={() => toggleTaskDone(task.id)} 
                    className="listButton">{checkmarkVisible(task.status)}</button>
                    <span className={`content ${checkIfLineThrough(task.status)}`}>{task.content}</span>
                    <button
                        onClick={() => removeTasks(task.id)}
                        className="listButton listButton--remove">🗑
                    </button>
                </li>
            ))}
        </ul>
    </div>)
};

export default Tasks;
