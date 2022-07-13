import React from "react"
import styles from "./TodoItem.module.css"
// import {state} from "react"
class TodoItem extends React.Component {
  render() {
  return (
    <li className={styles.item}>
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={this.props.todo.completed}
      onChange={() => this.props.handleChangeProps(this.props.todo.id)}
    />
    <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
      Delete
    </button>
    {this.props.todo.title}
  </li>
  )
  }
}

export default TodoItem