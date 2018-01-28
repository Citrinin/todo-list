import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

export class TableRow extends Component {
    changeTaskProp(propName, value) {
        this.props.updateTask(this.props.task.id, {
            [propName]: value
        });
    }
    render() {
        const { task, removeTask } = this.props;
        return (
            <Table.Row>
                <Table.Cell> {task.id}</Table.Cell>
                <Table.Cell> <input type='checkbox' defaultChecked={task.checked} onChange={(ev) => this.changeTaskProp('checked', ev.target.checked)} /></Table.Cell>
                <Table.Cell> {task.title}</Table.Cell>
                <Table.Cell> {task.priority}</Table.Cell>
                <Table.Cell> <input type='date' disabled value={task.date}></input></Table.Cell>
                <Table.Cell><button onClick={() => removeTask(task.id)}><i className="fa fa-times" aria-hidden="true"></i></button></Table.Cell>
            </Table.Row>
        )
    }
}

TableRow.propTypes = {
    task: PropTypes.object,
    removeTask: PropTypes.func,
    updateTask: PropTypes.func
}
