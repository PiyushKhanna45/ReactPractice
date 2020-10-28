import React, { Component } from 'react'

export class FormUserInput extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             topic:''

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
    

    render() {
        return (
            <form>
                
                <label>NAME</label>
                <input type='text' value={this.state.username} onChange={this.handleUserNameChange}></input>
                <br />
                <label>TOPIC</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                    <option value='react'>React</option>
                </select>
            </form>
        )
    }
}

export default FormUserInput
