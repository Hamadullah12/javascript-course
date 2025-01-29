import style from "./todoItem.module.css"
export default function TodoItem({ item , todos, setTodos}) {
    function handleDelete(item) {
        console.log("Delete button was clicked for item", item);
        setTodos(todos.filter((todo) => todo !== item))
}
    function handleClick(name) {
        console.log("Text clicked for item", name);
        const newArray = todos.map((todo) => todo.name === name ? { ...todo, done: !todo.done } : todo)
        setTodos(newArray)   
    }
    const complTask = item.done ? style.completed : ""
    return <div className={style.item}>  
        <div className={style.itemName}>
            <span className={complTask} onClick={()=>handleClick(item.name)}>
            {item.name}
            </span>
            
            <span>
                <button onClick={() =>
                    handleDelete(item)}
                    className={style.deleteButton}>x</button>
            </span>
        </div>
    <hr className={style.line} />
    </div>
}