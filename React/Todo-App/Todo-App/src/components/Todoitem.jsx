import style from "./todoItem.module.css"
export default function TodoItem({ item , todos, setTodos}) {
    function handleDelete(item) {
        console.log("Delete button was clicked for item", item);
        setTodos(todos.filter((todo) => todo !== item))
}

    return <div className={style.item}>  
        <div className={style.itemName}>{item}
            <span>
                <button onClick={
                    () =>
                    handleDelete(item)}
                    className={style.deleteButton}>x</button>
            </span>
        </div>
    <hr className={style.line} />
    </div>
}