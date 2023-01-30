import React from 'react'
import './index.css'

export const TodoItem = ({title,desc,deleteTodo}) => {
  return (
    <div className="todo-item">
        <h3>{title}</h3>
        <h3>{desc}</h3>
        <button type="button" className="btn btn-danger" onClick={()=>deleteTodo(title)}>Delete</button>
    </div>
  )
}

// export default TodoItem