import "./style.css";

const Form = () => (
    <form className="form">
        <input className="newTask" placeholder="Co jest do zrobienia?" />
        <button className="insertTaskButton">Dodaj zadanie</button>
    </form>
);

export default Form;