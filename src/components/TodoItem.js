import React from "react"
import styles from "./TodoItem.module.css"
function TodoItem(props) {
  return <li className={styles.item}>
    <input 
     className={styles.checkbox}
     type="checkbox"
     checked={props.todo.completed}
     onChange={() => props.handleChangeProps(props.todo.id)}
    />
    {props.todo.title}
    <button onClick={() => props.deleteTodoProps(props.todo.id)}>Delete</button>
    </li>
}

export default TodoItem