import React from "react"

function TodoItem(props) {
  return <li>
    <input type="checkbox"
     checked={props.todo.completed}
     onChange={() => console.log("clicked")}
    />
    {props.todo.title}
    </li>
}

export default TodoItem