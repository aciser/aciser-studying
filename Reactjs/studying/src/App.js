import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './components/Count';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 1,
      age:8
    }
  }
  increase = ()=>{
    return(
    this.setState({
      count: this.state.count+1
    })
  )
  }
  render(){
    return (
      <div>
        <Count number1={this.state.count} />
        <button onClick={this.increase}>Click</button>
        <Count number1='000' />
        <Count number1='888' />
      </div>
    )
  }
}

export default App;
