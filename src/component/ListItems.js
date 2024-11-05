import React from 'react'
import ELement from './ELement'

const ListItems = ({todos,filterTodo,CompTodo}) => {
  console.log(todos)
  return (
    <section className='todo-list-section'>
    <ul id='todo-list'>
{

  todos.map((el)=> <ELement   ell={el} filterTodo={filterTodo} CompTodo={CompTodo}   />)
}
     
    </ul>
  </section>
  )
}

export default ListItems