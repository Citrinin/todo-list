import React, { Component } from 'react';
import { TableRow } from './TableRow';
import './TaskTable.css';
import { TableHeader } from './TableHeader';
import PropTypes from 'prop-types';
import sortBy from '../utils/sortBy';
import { Table } from 'semantic-ui-react'

export class TaskTable extends Component {
    state = {
        tasks: [],
        order: 'id'
    }
    orderBy = (name) => (order) => this.setState({ order: `${order ? '' : '-'}${name}` });
    render() {
        const {
            tasks = [],
            updateTask,
            removeTask
        } = this.props;

        let sortedTasks = sortBy(tasks, this.state.order);

        return (
            <div>
                <label>Table sorted by {this.state.order}</label>
                <Table className='TaskTable' key='purple' color='purple'  >
                    <Table.Header>
                        <Table.Row>
                            <TableHeader title='Id' setSort={this.orderBy('id')} />
                            <TableHeader title='Done' setSort={this.orderBy('checked')} />
                            <TableHeader title='Title' setSort={this.orderBy('title')} />
                            <TableHeader title='Priority' setSort={this.orderBy('priority')} />
                            <TableHeader title='Date' setSort={this.orderBy('date')} />
                            <TableHeader title='Button' />
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {sortedTasks.map(task => <TableRow task={task} key={task.id} removeTask={removeTask} updateTask={updateTask} />)}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

TaskTable.propTypes = {
    tasks: PropTypes.array,
    removeTask: PropTypes.func,
    updateTask: PropTypes.func
}
