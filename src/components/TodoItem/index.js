// Write your code here
// import {Component} from 'react'
import './index.css'

const TodoItem = props => {
  const {title, toDelete, eachUser} = props
  const {id} = eachUser
  console.log(id)
  return (
    <li>
      <h1>{title}</h1>
      <button type="button" onClick={toDelete(id)}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
