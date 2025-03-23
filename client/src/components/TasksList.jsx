import React from 'react'
import { useGetTasksQuery, useUpdateTaskMutation, useDeleteTaskMutation } from '../API/apiSlice.js'

const TasksList = () => {

  const {data: tasks, isError, isLoading, error } = useGetTasksQuery(); // get tasks hook already come with these values.
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  
  console.log(tasks)
  if (isLoading) return <div className="">Loading...</div>
  else if (isError) return <div className="">Error: {error.message}</div>

  return (
    <ul>
      {
        tasks.map(task => (
          <li key={task.id}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <input type="checkbox" id={task.id} checked={task.completed} onChange={e => updateTask({...task, completed: e.target.checked})} />
            <label htmlFor={task.id}>Completed</label>
          </li>
        ))
      }
    </ul>
  )
}

export default TasksList