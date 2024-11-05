import React from 'react'

const ELement = ({ell,filterTodo,CompTodo}) => {
  return (
    <li className='todo-item'>
        <span 
        
        className='task-text'
        style={ ell.isDone ? {textDecoration:"line-through"} : {}  }> 
{ell.text}  </span>


 <button 
 
 className='complete-button' 

  onClick={()=>CompTodo(ell.id)}   >Complete</button>



 <button className='delete-button'   onClick={()=>filterTodo(ell.id)}     >Delete</button>
      </li>
  )
}

export default ELement