import React, { Component } from 'react';

class Count extends Component {
constructor(props){
 super(props)
 this.state ={ count :0 , name :"Subash"}
}
increment(){
  this.setState(prevState =>({
    count: prevState.count + 1

  }))
  console.log(this.state.count)
}
decrement(){
    this.setState(prevState =>({
   count: prevState.count - 1
  
    }))
    console.log(this.state.count)
}

  render() {
    return (
      <div>
       <h2> {this.state.name}</h2>  <h3> count ={this.state.count}  </h3>
       <h1> <button onClick= {()=> this.increment()}> Increament </button>
        
        <button onClick= {()=> this.decrement()}> Decrement </button> </h1>
      </div>
    );
  }
}

export default Count;