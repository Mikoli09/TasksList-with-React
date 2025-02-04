import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        newTaskContent.trim() !== "" ? addNewTask(newTaskContent.trim()) : document.querySelector(".form__task").focus();
        setNewTaskContent("");
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__task"
                placeholder="Co jest do zrobienia?"
                required
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <button className="form__insertTaskButton">Dodaj zadanie</button>
        </form>
    );
};

export default Form;