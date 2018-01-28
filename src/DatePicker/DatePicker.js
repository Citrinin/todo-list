import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DatePicker.css';


class DatePicker extends Component {
    state={
        dateType:false
    }
    changeState(){
        this.setState({dateType:true});
    }
    render() {
        if(!this.state['dateType']) {
            return (<input className='DatePicker-input' placeholder={this.props.placeholder} onClick={()=>this.changeState()}/>)
        } else if(this.state['dateType']){
            return ( <input className='DatePicker-input' type="date" />)

        }

    }
}

DatePicker.propTypes={
    placeholder:PropTypes.string
}

export default DatePicker;