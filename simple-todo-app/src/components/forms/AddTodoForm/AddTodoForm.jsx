import { useState } from "react";

const AddTodoForm = ({addTodo}) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    }

    return <form onSubmit={handleChange} className="todo-form">
        <input 
            className="todo-form__input"
            type="text"
            value={text}
            onChange={(e)=>(setText(e.target.value))}   
            placeholder="Введите задачу" 
        />
        <button className="todo-form__button" type="submit">Добавить</button>
    </form>
}

export default AddTodoForm;