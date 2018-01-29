import React, { Component } from 'react'
import './AddTask.css'
import { Form, Header, Segment } from 'semantic-ui-react';
import { TaskInfo } from '../TaskInfo';


export class AddTask extends Component {
    onSubmit = (event) => {
        event.preventDefault();
        let formData = [...event.target.querySelectorAll('[name]')]
            .reduce((hash, item) => ({ ...hash, [item.getAttribute('name')]: item.value || item.querySelector('[aria-selected=true]').innerText }), {});
        formData['done'] = false;
        this.props.onSubmit(formData);
        event.target.reset();
    }
    render() {
        return (
            <div>
                <Header attached='top' as='h2'>Add task</Header>
                <Segment attached>
                    <Form onSubmit={this.onSubmit} attached="true">
                        <TaskInfo />
                        <Form.Button color='purple' >Add Task</Form.Button>
                    </Form>
                </Segment>
            </div>
        )
    }
}
