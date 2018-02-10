import React, { Component } from 'react';
import Aux from './hoc/Aux';
import './App.css';
import First from './Container/First';
import axios from 'axios';


const API='a4af8f2e3276efc9318e1269d0db0cf0';


class App extends Component {
  constructor()
  {
    super();
    this.state={
      name:"Jabalpur",
      isClick:false,
      arr:''
    }
   this.weatherChange();
  }


  handleClick=()=>{

    
    this.weatherChange();
  }

  keyPressHandle=(e)=>{
   if(e.charCode===13)
   {
    
     this.weatherChange();
   }
  }





  weatherChange=()=>
  {
     axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.name}&units=metric&appid=${API}`)
     .then((res)=>{
    
      console.log(res.data);
      this.setState({
          arr:res.data,
          isClick:true
          
      })
     
      })
    
  }





 
  render() {
    let juju=null;
    return (
      <div className="App">
      <p> Welcome To Weather App </p>

      <Aux className="Apps">
      <input type="text" 
      onChange={(e)=>this.setState({name:e.target.value,isClick:false})} 
      value={this.state.name} 
      onKeyPress={this.keyPressHandle}
      
      /> 
      <button onClick={this.handleClick}>Submit</button>
      </Aux>


      {
        this.state.isClick ?
      <First arr={this.state.arr} /> : juju
      }
      </div>
    );
  }
}

export default App;
