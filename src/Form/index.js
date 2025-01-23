import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__task" placeholder="Co jest do zrobienia?" />
        <button className="form__insertTaskButton">Dodaj zadanie</button>
    </form>
);

export default Form;