import TodoItem from "./Todoitem";
import style from "./todoList.module.css"
export default function TodoList({ todos, setTodos }) {
  const sortedItem = todos.slice().sort((a, b)=> Number(a.done)-Number(b.done))
    return (
        <div className={style.list}>
          {
        sortedItem.map((item) => (
          <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
        ))}
        </div>
    )
}