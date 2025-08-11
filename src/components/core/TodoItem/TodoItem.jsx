const TodoItem = ({todo, toggleComplete, todoDelete}) => {
    return <div className={todo.completed ? "todo-item complited" : "todo-item"}>
        <input 
        className="todo-item__checkbox"
        type="checkbox" 
        checked={todo.completed} 
        onChange={()=>toggleComplete(todo.id)}
        />
        <p className="todo-item__text">{todo.text}</p>
        <button 
        className="todo-item__button" 
        type="button" 
        onClick={()=>todoDelete(todo.id)}
        >Удалить</button>
    </div>
}

export default TodoItem;