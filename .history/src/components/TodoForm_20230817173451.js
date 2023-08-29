import React from 'react'

export const TodoForm = () => {
  return (
    <form className='Todoform'>
        <input type="text" className='todo-input' placeholder="Quelle tâche à faire aujourd'hui ?" />
        <button type='submit' className='todo-btn'></button>
    </form>
  )
}
