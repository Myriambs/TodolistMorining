import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const AddItems = ({addItem}) => {

  const [textInpt,setTextInput]=useState()
  const Add=()=>{
   addItem({
    id:uuidv4(),
    text: textInpt ,
    isDone:false
   })   
  }

  return (

   
    <div>  <section className='todo-input-section'>
    <div className='todo-input-wrapper'>
      <input type='text' id='todo-input' placeholder='What do you want to do?'
       onChange={(e)=>setTextInput(e.target.value)} />
      <button id='add-button'  onClick={()=>Add()}  >Add</button>
    </div>
  </section></div>
  )
}

export default AddItems