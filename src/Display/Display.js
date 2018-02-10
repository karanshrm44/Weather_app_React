import React, { Component } from 'react';
import './Display.css';



const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const Months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


class Display  extends Component {


    


    render()
    {
        Date.prototype.getMonthByName=function(){
            return  Months[this.getMonth()];
        }
        Date.prototype.getDayByName=function(){
            return days[this.getDay()];
        }
       
        function formatDate(date)
        {
            return `${date.getDate()} ${date.getMonthByName()}` ;
        }
 
        function dayName(date)
        {
            return `${date.getDayByName()}`;
        }


        const date=formatDate(new Date(this.props.date));
        const day=dayName(new Date(this.props.date));
     
        return(
            <div className="Display">
            <p>{day}  {date}</p>
            <p>Temperature: {this.props.temp}</p>
            <p>Dscp: {this.props.description}</p>
            <p>Wind Speed: {this.props.speed}</p>
            

            </div>


        )
    }
}

export default Display;