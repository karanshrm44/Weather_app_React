import React, { Component } from 'react';
import Display from '../Display/Display';


class First extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            arr:this.props.arr
        }
    }
  


    render()
    { 
        
       let lenArray=this.state.arr.list.length;
       const nArray=[];

       for(let x=0;x<lenArray;x+=8)
        {
          nArray.push(this.state.arr.list[x]);
       }


       let weatherInfo=nArray.map((item,index)=>{
           return <Display 
           key={index}
           speed={item.wind.speed}
           temp={item.main.temp}
           date={item.dt_txt}
           description={item.weather[0].description}
           />
       })
        
        return(
            <div>
            {weatherInfo}

            
            </div>
        )
    }
}

export default First;