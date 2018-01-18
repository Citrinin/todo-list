import React, { Component } from 'react';
import DatePicker from '../DatePicker';
import './Filter.css';

class Filter extends Component {
    render(){
        return(
            <fieldset className='Filter-fieldset'> 

                <legend align="left">Filter</legend>
                <div>
                <label> <input type="checkbox" />Show completed </label>
                <DatePicker placeholder='Date From'/>
                <DatePicker placeholder='Date To'/>
                </div>
                <div>
                    <input className="Filter-text" placeholder='Text search (title + description)'/>
                </div>
            </fieldset>
        )
    }
}

export default Filter;