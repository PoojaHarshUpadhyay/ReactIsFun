import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Username submitted is: ' + this.state.value);
    event.preventDefault();
  }
 resetInput(event){
   this.setState({value: ''});
 }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Reat is fun</h1>
        </header>
        <p className="App-intro">
        <p> It is {''} {new Date().toLocaleTimeString()} </p>
        </p>
        <form onSubmit={this.handleSubmit}  class="login">
          <input type="text" placeholder="Username" id="username" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
           <input type="button" value="Clear data" onClick={this.resetInput} />
       </form>
    </div>
    );
  }
}



export default App;
