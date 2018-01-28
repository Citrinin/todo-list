import React, { Component } from 'react';
import DatePicker from '../DatePicker';
import './AddTask.css';


class Add_task extends Component {
    render() {
        return (  <fieldset className='AddTask-fieldset'> 

                <legend align="left">Add Task</legend>
                <div>
                <input className='AddTask-input' placeholder='Title'/>
                <select className='AddTask-input'>
                    <option disabled selected>Priority</option>
                    <option>Hight</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
                <DatePicker className='AddTask-input' placeholder='Date'/>
                </div>
                <div>
                    <textarea className='AddTask-description' placeholder='Description'></textarea>
                </div>
                <div>
                <button className='AddTask-button'>Add</button>
                </div>
            </fieldset>
        );
    }
}



export default Add_task;