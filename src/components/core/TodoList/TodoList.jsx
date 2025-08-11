import TodoItem from "../TodoItem"

const TodoList = ({todos, toggleComplete, deleteTodo}) => {

    const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return 0;
    });


    return <div className="todo-list">
        {   sortedTodos.length === 0 ? <h2 className="todo-list__label">Задач нет</h2> :

            sortedTodos.map((todo) => (
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