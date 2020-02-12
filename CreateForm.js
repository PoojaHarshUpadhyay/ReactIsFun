import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            married: 'no'
        }
    }
    handleFNameChange = event => {
        this.setState({fname: event.target.value})
    }
    handleLNameChange = event => {
        this.setState({lname: event.target.value})
    }
    handleMarriedChange = event => {
        this.setState({married: event.target.value})
    }
    handleFormSubmit = event => {
        alert(`${this.state.fname} ${this.state.lname} ${this.state.married}`)
        event.preventDefault()
    }

    render() {
        return(
        <form onSubmit= {this.handleFormSubmit}>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    value = {this.state.fname} 
                    onChange = {this.handleFNameChange}
                 />
                <br />
                <label>Last Name</label>
                <input 
                    type="text" 
                    value = {this.state.lname}
                    onChange = {this.handleLNameChange}
                />
                <br />
                <label>Married</label>
                <select value= {this.state.married} onChange= {this.handleMarriedChange}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <br/>
                <button type="submit">Submit</button>
            </div>
        </form>
        )
    }
}

export default Forms
