import React, { Component } from 'react'
import { DatePicker } from '../DatePicker'
import './AddTask.css'
import { Form, Header, Segment } from 'semantic-ui-react'

const priorityOptions = [
    { key: '1', text: 'Low', value: 'Low' },
    { key: '2', text: 'Medium', value: 'Medium' },
    { key: '3', text: 'High', value: 'High', },
]

export class AddTask extends Component {
    onSubmit = (event) => {
        event.preventDefault();
        let formData = [...event.target.querySelectorAll('[name]')]
            .reduce((hash, item) => ({ ...hash, [item.getAttribute('name')]: item.value }), {});
        this.props.onSubmit(formData);
        console.log(formData);
        event.target.reset();
    }
    render() {
        return (
            <div>
                <Header attached='top' as='h3'>Add task</Header>
                <Segment attached>
                    <Form onSubmit={this.onSubmit} attached="true">
                        <Form.Group>
                            <Form.Input className='AddTask-input' placeholder='Title' name='title' />
                            <Form.Select className='AddTask-input' defaultValue='Medium' name='priority' options={priorityOptions}>
                            </Form.Select>
                            <DatePicker className='AddTask-input' placeholder='Date' name='date' />
                        </Form.Group>
                        <Form.Group>
                            <Form.TextArea className='AddTask-description' placeholder='Description' name='description' fluid="true"></Form.TextArea>
                        </Form.Group>
                        <Form.Button color='purple' >Add Task</Form.Button>
                    </Form>
                </Segment>
            </div>
        )
    }
}
