import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
// import Header from './Header'
import {Todos} from './Todos'

function App() {
  // const [count, setCount] = useState(0)
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }
  
  const [title , setTitle] = useState("")
  const [desc , setDesc] = useState("")

  const deleteItem = (title)=>{
    console.log("I am deleting this todo")

    setTodo(todo.filter((e)=>{
        return e.title!==title
    }))


    
     localStorage.setItem("todo", JSON.stringify(todo))

  
  }

  const [todo,setTodo] = useState(initTodo)
  
  useEffect(() => {

    localStorage.setItem("todo", JSON.stringify(todo));

  }, [todo])


//   function addTodo(){
//     let obj = localStorage.getItem("todo")
//     obj = JSON.parse(obj)
//     setTodo([...todo,obj])

//   }
  
  function submitFunction(e){
    e.preventDefault();
   
    if(!title || !desc){
      alert("Title or Description cannot be blank")
    }
    else {
      let id;
      if(todo.length != 0){

        id = todo[todo.length-1].id + 1
      }
      else {
        id = 1;
      }
      const obj = {
        id:id,
        title:title,
        desc:desc
      }
      
      setTodo([...todo, obj]);
      setTitle("");
      setDesc("");
      
    }
//       if(localStorage.getItem("todo")){ 
//         localStorage.setItem("todo",JSON.stringify(obj))
//         addTodo();
//       }
      // localStorage.setItem("todo",JSON.stringify(obj))
    
  }

  return (
    <div className="App">
      <form onSubmit={submitFunction}>
      <h1 style={{marginBottom:"20px",color:"White"}}>Todo App</h1>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Title...' className="title-field" />
      <input type="text" value={desc} onChange={e => setDesc(e.target.value)} placeholder='Description...' className="desc-field" />
      <button type="submit" class="btn btn-success" style={{marginBottom:"20px"}}>Add</button>
      </form>
      <Todos todos={todo} deleteItems={deleteItem} /> 
      {/* <h1 className="my-3">This is me Vishek Patel</h1> */}
      {/* <button type="button" class="btn btn-primary btn-lg">Primary</button> */}
  
    </div>

  )
}

export default App

{/* <Header title="Todo-List App" isVisible={true} /> */}