import React, { useState } from 'react'
import './App.css'
import AddItems from './component/AddItems'
import ListItems from './component/ListItems'
import Header from './component/Header'
const App = () => {

const  [todos,setTodos]=useState([{
    id:1,text:"fi9An bikri",isDone:false     
  },
  {
    id:2,text:"todo2",isDone:true

  },
  {
    id:3,text:"todo3",isDone:false
  }
])
 
  const filterTodo=(ID)=>{
    setTodos(
      todos.filter((el)=> el.id !== ID)
    )
    
  }


  const CompTodo=(ID)=>{
setTodos(
  todos.map((el)=> el.id === ID ? {...el, isDone: !el.isDone}:el)
)
  }

  const addItem=(newTodo)=>{
    setTodos(
      [...todos,newTodo]
    )
  }

  return (
    <div>
      {/* //comport 1 */}
      <div className='container'>
 <Header/>
  {/* comport add element  */}
  <AddItems  addItem={addItem}   />
  {/* coprt display  */}
<ListItems  todos={todos}   filterTodo={filterTodo}  CompTodo={CompTodo}   />
  </div></div>
  )
}

export default App




