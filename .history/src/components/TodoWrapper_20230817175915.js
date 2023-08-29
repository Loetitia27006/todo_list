import React, {useState} from 'react'
import { TodoForm } from './TodoForm'

export const TodoWrapper = () => {

    const [todos, setTodos] = useState([])
    const addTodo = todo =>{
        setTodos([...todos, {id: uuidv4(), task: todo,
        complete: false, isEditing: false}])
    }

  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}
