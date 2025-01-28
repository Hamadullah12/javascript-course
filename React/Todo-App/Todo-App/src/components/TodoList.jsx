import TodoItem from "./Todoitem";
export default function TodoList({todos}) {
    return (
        <div className="TodoList">
          {
        todos.map((item) => (
        <TodoItem key={item} item={item}/>
        ))}
        </div>
    )
}