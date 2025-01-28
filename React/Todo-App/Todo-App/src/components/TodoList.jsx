import TodoItem from "./Todoitem";
import style from "./todoList.module.css"
export default function TodoList({todos}) {
    return (
        <div className={style.list}>
          {
        todos.map((item) => (
        <TodoItem key={item} item={item}/>
        ))}
        </div>
    )
}