import React, {Component} from 'react'
import shortid from 'shortid'

export class TodoForm extends Component {

    state = {
        text: ''
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addTodo({
            id: shortid.generate(),
            text:this.state.text,
            //mateen named this wrong
            compete: false
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input name='text' value={this.state.text} onChange={this.handleChange} placeholder='todo...'/>
                <button>Add To-Do</button>
            </form>
        )
    }
}

export default TodoForm