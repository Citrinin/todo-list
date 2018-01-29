import React, { Component } from 'react'
import { Button, Icon, Modal, Form } from 'semantic-ui-react'
import { TaskInfo } from '../TaskInfo';

export class EditModal extends Component {
    onSubmit = (event) => {

        let formData = [...document.querySelector('.modal').querySelectorAll('[name]')]
            .reduce((hash, item) => ({ ...hash, [item.getAttribute('name')]: item.value || item.querySelector('[aria-selected=true]').innerText }), {});
        formData['done'] = false;
        this.props.updateTask(this.props.task.id, formData);
        this.props.onClose();
    }
    render() {
        return (
            <Modal open={this.props.open} size='small' className='modal'>

                <Modal.Header>
                    <h2>
                        <Icon name='edit' />
                        Edit task
                    </h2>
                </Modal.Header>

                <Modal.Content>
                    <Form >
                        <TaskInfo task={this.props.task} />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.onSubmit} disabled={this.props.task.done} inverted>
                        <Icon name='checkmark' /> Edit
                     </Button>
                    <Button color='red' onClick={this.props.onClose} inverted>
                        <Icon name='remove' /> Cancel
                     </Button>
                </Modal.Actions>

            </Modal>
        )
    }
}