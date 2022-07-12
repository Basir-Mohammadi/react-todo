import React from "react"
import styles from "./TodoItem.module.css"
import {state} from "react"
function TodoItem(props) {

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }

      const { completed, id, title } = props.todo;
    //   state = {
    //     editing: false,
    //   }

      const handleEditing = () => {
        this.setState ({
            editing: true
        })
      }

    let viewMode = {}
    let editMode = {}

    // if (this.state.editing) {
    // viewMode.display = "none"
    // } else {
    // editMode.display = "none"
    // }

  return (
    <li className={styles.item}>
        <div onDoubleClick={handleEditing}  style={viewMode}>
            <input 
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => props.handleChangeProps(id)}
            />
            <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
            <span  style={props.todo.completed ? completedStyle : null}>
            {title}
            </span>
    </div>
    <input type="text" style={editMode} className= {styles.textInput} />
    </li>
  )
}

export default TodoItem