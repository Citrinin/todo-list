import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DatePicker.css';
import { Form } from 'semantic-ui-react'



export class DatePicker extends Component {
    state = {
        dateType: false
    }
    defaultTaskDate = () => {
        let date = new Date();
        return `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? ("" + date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate()}`

    }
    changeState() {
        this.setState({ dateType: true });
    }
    render() {
        if (!this.state['dateType']) {
            return (
                <Form.Input
                    placeholder={this.props.placeholder}
                    onClick={() => this.changeState()} />)
        }
        else if (this.state['dateType']) {
            return (<Form.Input
                type="date"
                defaultValue={this.defaultTaskDate()}
                onChange={this.props.onChange}
                name={this.props.name}
            />)

        }

    }
}

DatePicker.propTypes = {
    placeholder: PropTypes.string
}