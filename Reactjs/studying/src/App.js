import React from 'react';
import './App.css';
import Start from './components/Start';
import Stop from './components/Stop';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      time: new Date()
    }
    this.process = null
  }
  startApp = ()=>{
    this.process = setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 1000);
  }
  stopApp = ()=>{
    clearInterval(this.process)
  }
  render(){
    return(
      <>
        <h1>Dong Ho : {this.state.time.toString()}</h1>
        <Start StartApp={this.startApp}></Start>
        <Stop StopApp={this.stopApp} ></Stop>
      </>
    )
  }
}

export default App;
