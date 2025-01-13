import { useState } from "react"
export default function TodoList() {
    let [todos, setTodos] = useState(["sample task"]);
    let [newValue, setNewValue] = useState("");
    let addNewTask=()=>{
        setTodos([...todos, newValue]);
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
                        <li>{ todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}