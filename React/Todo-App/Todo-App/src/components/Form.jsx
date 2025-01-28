import { useState } from "react";
import style from "./form.module.css";
export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo(" ");
    }
    return (
    <div>
           <form className={style.todoForm} onSubmit={handleSubmit}>
                <div className={style.inputContainer}>
                <input className={style.mordernInput}
            onChange={(e)=> setTodo(e.target.value)}
                type="text" value={todo} placeholder="Todo List here...."/>
            <button className={style.mordernbutton} type="submit">Add</button>
          </div>
        </form>
    </div>
    )
}