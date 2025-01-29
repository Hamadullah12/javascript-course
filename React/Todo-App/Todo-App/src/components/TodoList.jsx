import TodoItem from "./Todoitem";
import style from "./todoList.module.css"
export default function TodoList({todos,setTodos}) {
    return (
        <div className={style.list}>
          {
        todos.map((item) => (
          <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
        ))}
        </div>
    )
}