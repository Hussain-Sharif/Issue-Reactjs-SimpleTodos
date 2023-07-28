import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  toDelete = id => {
    const {todoList} = this.state
    const final = todoList.filter(each => each.id !== id)
    this.setState({todoList: final})
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="d1">
        <div className="d2">
          <h1>Simple Todos</h1>
          <ul className="d3">
            {todoList.map(each => {
              console.log(
                <TodoItem
                  toDelete={this.toDelete}
                  key={each.id}
                  title={each.title}
                  eachUser={each}
                />,
              )
              return (
                <TodoItem
                  toDelete={this.toDelete}
                  key={each.id}
                  title={each.title}
                  eachUser={each}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
