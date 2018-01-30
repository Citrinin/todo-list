import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Input, Button, Checkbox } from 'semantic-ui-react';
import { EditModal } from '../EditModal';

export class TableRow extends Component {
    state = {
        modalOpen: false
    }
    changeTaskProp(propName, value) {
        this.props.updateTask(this.props.task.id, {
            [propName]: value
        });
    }
    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })
    render() {
        const { task, removeTask } = this.props;
        return (
            <Table.Row onDoubleClick={this.handleOpen}>
                <Table.Cell> <Checkbox defaultChecked={task.done} onChange={(ev, data) => this.changeTaskProp('done', data.checked)} /></Table.Cell>
                <Table.Cell> {task.title}</Table.Cell>
                <Table.Cell> {task.priority}</Table.Cell>
                <Table.Cell> <Input type='date' readOnly={true} value={task.date}></Input></Table.Cell>
                <Table.Cell><Button size='mini' onClick={() => removeTask(task.id)} color='purple'><i className="fa fa-times" aria-hidden="true"></i></Button></Table.Cell>
                <EditModal open={this.state.modalOpen} onClose={this.handleClose} task={task} updateTask={this.props.updateTask} />
            </Table.Row>
        )
    }
}

TableRow.propTypes = {
    task: PropTypes.object,
    removeTask: PropTypes.func,
    updateTask: PropTypes.func
}
