const Todo = (props) => {
    return(
        <li className={props.todo.isDone ? 'todo-completed' : 'todo'} onClick={props.toggleTodo}>{props.todo.description}</li>
    )
}

export default Todo;