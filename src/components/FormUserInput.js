import React, { Component } from 'react'

export class FormUserInput extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             topic:'react'

        }
    }

    handleUserNameChange = event => {
        this.setState({
            username:event.target.value
        })
        
    }

    handleTopicChange = event =>{
        this.setState({
            topic:event.target.value
        })
    }
    
    handleSubmitForm = event => {
        alert(`${this.state.username} loves ${this.state.topic}`)
        // event.preventDefault()
    }

    render() {
        const {username, topic} = this.state
        return (
            <form onSubmit={this.handleSubmitForm}>
                
                <label>NAME</label>
                <input type='text' value={username} onChange={this.handleUserNameChange}></input>
                <br />
                <label>TOPIC</label>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                    <option value='react'>React</option>
                </select>
                <br />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default FormUserInput
