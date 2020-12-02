// import React from 'react' // don't need this in React 17 functional components - wuuuut

const Todo = ({text, compete, toggleComplete, deleteTodo}) => {
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{textDecoration: compete ? 'line-through' : ''}} onClick={toggleComplete}>{text}</div>
        <button onClick={deleteTodo}>x</button>
        </div>
    )
}

export default Todo