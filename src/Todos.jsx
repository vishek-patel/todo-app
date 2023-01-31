import React from 'react'
import {TodoItem} from './TodoItem'
import './index.css'

export const Todos = ({todos,deleteItems}) => {
    // const deleteTodo = () => {
    //     console.log("I am deleting this todo")
    // }
    const todoArray = Object.values(todos);

  return (<div className="todo-conatiner">

    {todoArray.length === 0? "No Todos to display":
    todoArray.map((value) =>{

        return <TodoItem title={value.title} desc={value.desc} key={value.id} deleteTodo={deleteItems} />

    }
    )
    }
   
    
    </div>
  )

}
