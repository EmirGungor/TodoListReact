/* eslint-disable no-unused-vars */
import React from 'react'
import '../App.css';

const TodoCreate = () => {
  return (
    <div className='todo-create'>
        <input className='todo-input' type="text" placeholder='Todo giriniz' />
        <button className='todo-create-button'>Todo Oluştur</button>
    </div>
  )
}

export default TodoCreate