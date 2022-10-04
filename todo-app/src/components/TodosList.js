import Todo from "./Todo";

const TodoList = (props) => {

    const toggleTodo = (id) => {
        let updatedTodos = props.todos.map(todo => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        })
        props.setTodos(updatedTodos)
      }


    return(
        <ul>
        {props.todos.map((todo, idx) => (
          <Todo key={idx} id={idx} todo={todo} toggleTodo={() => toggleTodo(todo.id)}/>
        ))}
      </ul>
    )
}

export default TodoList;