import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super()
    this.state= {
      list: []
    }
  }

  addItem = (event) => {
    event.preventDefault()
    const userInput = event.target.userInput.value
    this.setState((prevState)=>({
      list: prevState.list.concat(userInput)
    }))
  }

  displayList = () => {
    return this.state.list.map((item, index) => {
      return (
        <div className="itemsinlist" key={index}>
          <ul>
            <li>
              { item } <button onClick={()=>this.removeItem(index)}>X</button>
            </li>
          </ul>
        </div>
      )
    } )
  }


  removeItem = (index) => {
    const listCopy = this.state.list.slice()
    listCopy.splice(index, 1)
    this.setState({list: listCopy})
  }
  

  componentDidMount(){
    this.displayList()
  }


  render() {
    return (
      <div>
       <br></br>
       <h1 style={{ color: 'white' }}>To Do List</h1>
       <br/>
       <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter an item"
          name="userInput"
          className="userInput"
          />
          <button>Add</button>
        </form>
          <br/>
          <h2 style={{ color: "white" }}>Current List</h2>
          <br />
          {this.displayList()}
      </div>
    );
  }
}
