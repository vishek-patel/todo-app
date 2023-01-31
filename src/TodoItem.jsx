import React from 'react'
import './index.css'

export const TodoItem = ({title,desc,deleteTodo}) => {

    const lineThrough = ()=>{
        // alert("hi")
        // let element = document.getElementById("title")
        // let descelement = document.getElementById("desc")

        // element.style.textDecoration = "line-through"
        // descelement.style.textDecoration = "line-through"
    }

  return (
    <div className="todo-item">
        <h3 style={{color:"white"}} id="title">{title}</h3>
        <h4 style={{color:"#a384eb"}} id="desc">{desc}</h4>
        <div >

        <button type="button" className="btn btn-primary" onClick={()=>deleteTodo(title)}>Delete</button>
        {/* <button style={{marginLeft:"20px"}} type="button" className="btn btn-primary" onClick={()=>lineThrough()}>Done</button> */}
        </div>
    </div>
  )
}

// export default TodoItem