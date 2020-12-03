import React, {useState} from 'react'
import shortid from 'shortid'

/*
Converting to hooks:
1. convert from class to functional component
2. Remove the render
3. Import useState - useEffect is only for fetching
4. change initial state with useState
5. Change functions into const
6. Remove the 'this' and 'state' when being called
7. Replace setState with setText
*/

const TodoForm =({addTodo}) => {
    const [text, setText] = useState('')

    const handleChange = event => {
        setText(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        addTodo({
            id: shortid.generate(),
            text:text,
            //mateen named this wrong
            compete: false
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name='text' value={text} onChange={handleChange} placeholder='todo...'/>
            <button>Add To-Do</button>
        </form>
    )
}

export default TodoForm