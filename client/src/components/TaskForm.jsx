import React, { useState } from 'react'

const TaskForm = () => {

  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false,
  })

  const handleSubmit = e => {
    e.preventDefault();

    console.log(task)
  }

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.type ==="checkbox" ? e.target.checked ? true : false : e.target.value,
    })
  }

  return (
    <form>

      <input type='text' name='title' onChange={handleChange} />
      <input type='text' name='description' onChange={handleChange} />
      <input type='checkbox' name='completed' onChange={handleChange} />
      <button onClick={handleSubmit}>Add Task</button>

    </form>
  )
}

export default TaskForm
