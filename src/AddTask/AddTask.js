import React, { Component } from 'react'
import './AddTask.css'
import { Form, Header, Segment } from 'semantic-ui-react';
import { TaskInfo } from '../TaskInfo';
import getDataFromForm from '../utils/getDataFromForm';


export class AddTask extends Component {
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(getDataFromForm(event.target));
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
