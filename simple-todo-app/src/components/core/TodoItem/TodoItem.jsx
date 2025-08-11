const TodoItem = ({todo, toggleComplete, todoDelete}) => {
    return <div>
        <input type="checkbox" 
        checked={todo.completed} 
        onChange={()=>toggleComplete(todo.id)}
        />
        <p>{todo.text}</p>
        <button type="button" onClick={()=>todoDelete(todo.id)}>Удалить</button>
    </div>
}

export default TodoItem;