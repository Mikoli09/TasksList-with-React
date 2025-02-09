import { useRef, useState } from "react";
import { StyledForm, Task, InsertTaskButton } from "./styled";


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
        <StyledForm
            onSubmit={onFormSubmit}>
            <Task
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                required
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <InsertTaskButton>Dodaj zadanie</InsertTaskButton>
        </StyledForm>
    );
};

export default Form;