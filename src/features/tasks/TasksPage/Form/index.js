import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, InsertTaskButton } from "./styled";
import { Input } from "../../common/Input/index";
import { addNewTask } from "../../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const newTaskContentTrimmed = newTaskContent.trim();
    const dispatch = useDispatch();

    const setFocusOnInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContentTrimmed === "") {
            setFocusOnInput();
            return;
        }
        dispatch(addNewTask({
            content: newTaskContentTrimmed,
            status: "toDo",
            id: nanoid(),
        }
        ));
        setNewTaskContent("");
        setFocusOnInput();
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}>
            <Input
                id={nanoid()}
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