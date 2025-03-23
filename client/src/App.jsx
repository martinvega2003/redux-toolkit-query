import React from 'react'
import TasksList from './components/TasksList'
import TaskForm from './components/TaskForm'

const App = () => {
  return (
    <div className='flex flex-col justify-start items-center'>
      <TaskForm />
      <TasksList />
    </div>
  )
}

export default App