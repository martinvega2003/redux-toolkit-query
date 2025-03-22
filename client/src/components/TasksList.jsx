import React from 'react'
import { useGetTasksQuery } from '../API/apiSlice.js'

const TasksList = () => {

  const {data: tasks, isError, isLoading, error } = useGetTasksQuery(); // get tasks hook already come with these values.
  
  console.log(tasks)
  if (isLoading) return <div className="">Loading...</div>
  else if (isError) return <div className="">Error: {error.message}</div>
  return (
    <ul>
      {
        tasks.map(task => {
          <li key={task.id}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
          </li>
        })
      }
    </ul>
  )
}

export default TasksList