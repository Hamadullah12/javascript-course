import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
    let [todos, setTodos] = useState([{task : "simple task", id : uuidv4()}]);
    let [newValue, setNewValue] = useState("");
    let addNewTask=()=>{
        setTodos([...todos, { task : newValue, id : uuidv4()}]);
        setNewValue("")
    }



    let udpateNewValue = (event) => {
        setNewValue(event.target.value)
       
    }
    return (
        <div>
            <input type="text" placeholder="Add your task" value={newValue} onChange={udpateNewValue} />
            <br />
            <button onClick={addNewTask}>Add Task</button>

            <hr />
            <h3>Tasks Todo</h3>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>{todo.task}</li>
                    ))
                }
            </ul>
        </div>
    )
}