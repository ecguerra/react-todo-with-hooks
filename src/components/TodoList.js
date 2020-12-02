import React, { Component } from 'react'
import axios from 'axios'

// Components
import Todo from './Todo'
import TodoForm from './TodoForm'

/*
  TodoMVC ✔️
  1. display todos
  2. add todo 
  3. cross off todo 
  4. show number of active todos
  5. delete todo
  <--- EXTRA CREDIT 👇 ---> 
  6. filter all/active/complete 
  7. delete all complete
    7.1 only show if atleast one is complete 
  8. button to toggle all on/off 

  https://appian-mock.herokuapp.com/todos
*/

class TodoList extends Component {
  
  // setting up initial state
  state={
    todos:[]
  }

  // used to fetch data after component renders
  componentDidMount(){
    axios.get('https://appian-mock.herokuapp.com/todos').then(res => {
      this.setState({
        todos: res.data
      })
    })
  }

  // function that grabs the todo from the child (TodoForm)
  addTodo = todo => {
    this.setState(state => ({
      // creates a copy of the todos array and adds the new todo to the front
      // [...state.todo, todo] would add to the back
      todos: [todo, ...state.todos]
    }))
  }

  // function that gets passed an id and toggles 'compete' field from false to true/true to false
  toggleComplete = (id) => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        // check if each id is equal to the id that we passed
        if(todo.id === id) {
          return{
            ...todo,
            compete: !todo.compete
          
          }
        } else {
          return todo
        }
        })
    }))
  }

  deleteTodo = (id) => {
    this.setState(state => ({
      // filter out each todo that doesn't equal to the id being passed
      todos: state.todos.filter(todo => todo.id !== id)
    }))
  }

  render() {
    // console.log(this.state.todos)
    return <div>
      <TodoForm addTodo={this.addTodo}/>
    {/* mapping through the array of todos in the state */}
      {this.state.todos.map(todo => (
        <Todo 
          key={todo.id} 
          text={todo.text} 
          compete={todo.compete} 
          toggleComplete={()=>this.toggleComplete(todo.id)}
          deleteTodo={()=> this.deleteTodo(todo.id)}
        />
      ))}
      <div>
        {/* filter out all of the NOT completed todos in a new array and get the length */}
        To-dos left: {this.state.todos.filter(todo => !todo.compete).length}
      </div>
    </div>
  }
}

export default TodoList
