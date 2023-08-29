import React from 'react'

export const TodoForm = () => {
  return (
    <form className='Todoform'>
        <input type="text" className='todo-input' placeholder="Quelle tâche à rajouter aujourd'hui ?" />
        <button type='Valider' className='todo-btn'></button>
    </form>
  )
}
