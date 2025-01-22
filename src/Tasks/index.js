import "./style.css"


const checkIfHide = (elementStatus, variableStatus) => {
    if (!variableStatus) {
        return "";
    }
    return elementStatus === "done" ? " task__hidden" : ""
};

const checkmarkVisible = elementStatus => elementStatus === "done" ? "✔" : "";

const checkIfLineThrough = elementStatus => elementStatus === "done" ? "content__done" : "";


const Tasks = (props) => (
    <div className="section__container">
    <ul className="tasks">
        {props.tasks.map(task => (
            <li key={task.id} className={`task${checkIfHide(task.status, props.hideDoneTasks)}`}>
                <button className="listButton">{checkmarkVisible(task.status)}</button>
                <span className={`content ${checkIfLineThrough(task.status)}`}>{task.content}</span>
                <button className="listButton listButton--remove">🗑</button>
            </li>
        ))}
    </ul>
    </div>
);


export default Tasks;
