import React, { Component } from 'react';
import InputNumber from './components/input'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      value:''
    }
  }
  render(){
    let {value} = this.state
    return (
      <div>
        {value}
        <InputNumber value={value} onChange={e=>{
          this.setState({
            value:e.target.value
          })
        }}/>
        <InputNumber defaultValue={value} onChange={e=>{}}/>
      </div>
    )
  }
}

export default App;
