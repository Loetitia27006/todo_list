import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("")
    const handleSubmit = e => { 
        e.preventDefault()
        addTodo(value)
        setValue("")
    }

  return (
    <form className='Todoform' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder="Quelle tâche à faire aujourd'hui ?" 
        onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Ajouter</button>
    </form>
  )
}
