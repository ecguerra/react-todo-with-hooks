import React, {useEffect, useState} from 'react'
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

/*
Converting to hooks:
1. convert from class to functional component
2. Remove the render
3. Import useEffect and useState
4. change initial state with useState
*/

const TodoList = () => {
  
  // setting up initial state
  const [todos, setTodos] = useState([])

  // useEffect runs every time the component loads
  useEffect(()=>{
    axios.get('https://appian-mock.herokuapp.com/todos').then(res => {
      setTodos(res.data)
    })

  },[])

  // function that grabs the todo from the child (TodoForm)
  const addTodo = todo => {
    setTodos([todo, ...todos])
  }

  // function that gets passed an id and toggles 'compete' field from false to true/true to false
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          return{
            ...todo,
            compete: !todo.compete
          }
        } else {
          return todo
        }
      })
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

    return (
    <div>
      <TodoForm addTodo={addTodo}/>
      {todos.map(todo => (
        <Todo 
          key={todo.id} 
          text={todo.text} 
          compete={todo.compete} 
          toggleComplete={()=>toggleComplete(todo.id)}
          deleteTodo={()=> deleteTodo(todo.id)}
        />
      ))}
      <div>
        To-dos left: {todos.filter(todo => !todo.compete).length}
      </div>
    </div>
    )
  }

export default TodoList
