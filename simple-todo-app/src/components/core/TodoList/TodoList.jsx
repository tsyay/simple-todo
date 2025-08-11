import TodoItem from "../TodoItem"

const TodoList = ({todos, toggleComplete, deleteTodo}) => {
    return <div>
        {   todos.length === 0 ? <div>Задач нет</div> :

            todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo = {todo}
                    toggleComplete = {toggleComplete}
                    todoDelete = { deleteTodo }
                />
            ))
        }
    </div>
}

export default TodoList;