import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoList.module.css';

export default function TodoList() {
   let [todos, setTodos] = useState([{ task: "simple task", id: uuidv4() }]);
   let [newValue, setNewValue] = useState("");

   let addNewTask = () => {
        if (!newValue.trim()) return; // Prevent adding empty tasks
        setTodos((prevTodos) => [...prevTodos, { task: newValue.trim(), id: uuidv4() }]);
        setNewValue("");
    };

    let updateNewValue = (event) => {
        setNewValue(event.target.value);
    };

    let deleteTodos = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let upperCaseAll = () => {
       setTodos( todos.map((todo) => {
            return {
               ...todo,
                task: todo.task.toUpperCase(),
           }
       
       }))
    }

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Add your task"
                value={newValue}
                onChange={updateNewValue}
                className={styles.input}
            />
            <button onClick={addNewTask} className={styles.addButton}>Add Task</button>
            <hr />
            <h3>Tasks Todo</h3>
            <ul className={styles.taskList}>
                {todos.map((todo) => (
                    <li key={todo.id} className={styles.taskItem}>
                        <span className={styles.taskText}>{todo.task}</span>
                        <button onClick={() => deleteTodos(todo.id)} className={styles.deleteButton}>
                            Delete Task
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    );
}
