import React from 'react'
import {TodoItem} from './TodoItem'
import './index.css'

export const Todos = ({todos,deleteItems}) => {
    // const deleteTodo = () => {
    //     console.log("I am deleting this todo")
    // }
    const todoArray = Object.values(todos);

  return (<div className="todo-conatiner">

<<<<<<< HEAD
    {todoArray.length === 0? <h3 style={{color:"white"}}>"No Todos to display"</h3>:
=======
    {todoArray.length === 0? "No Todos to display":
>>>>>>> 818b509d016800da41dc81c4bc982d30de4b1428
    todoArray.map((value) =>{

        return <TodoItem title={value.title} desc={value.desc} key={value.id} deleteTodo={deleteItems} />

    }
    )
    }
   
    
    </div>
  )

}
