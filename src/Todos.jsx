import React from 'react'
import {TodoItem} from './TodoItem'
import './index.css'

export const Todos = ({todos,deleteItems}) => {
    // const deleteTodo = () => {
    //     console.log("I am deleting this todo")
    // }

  return (<div className="todo-conatiner">

    {todos.length === 0? "No Todos to display":
    todos.map((value) =>{

        return <TodoItem title={value.title} desc={value.desc} key={value.id} deleteTodo={deleteItems} />

    }
    )
    }
   
    
    </div>
  )

}
