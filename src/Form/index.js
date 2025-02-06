import { useRef, useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const setFocusOnInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            setFocusOnInput();
            return;
        }
        addNewTask(newTaskContent.trim())
        setNewTaskContent("");
        setFocusOnInput();
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
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