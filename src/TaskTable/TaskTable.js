import React, { Component } from 'react';
import { TableRow } from './TableRow';
import './TaskTable.css';
import { TableHeader } from './TableHeader';
import PropTypes from 'prop-types';
import sortBy from '../utils/sortBy';
import { Table } from 'semantic-ui-react'

const columns = ['Done', 'Title', 'Priority', 'Date']

export class TaskTable extends Component {
    state = {
        tasks: [],
        order: 'title',
        column: 'title'
    }
    orderBy = (name) => (order) => this.setState({ order: `${order ? '' : '-'}${name}`, column: name });
    render() {
        const {
            tasks = [],
            updateTask,
            removeTask
        } = this.props;

        let sortedTasks = sortBy(tasks, this.state.order);

        return (
            <div>
                <Table className='TaskTable' key='purple' color='purple' sortable >
                    <Table.Header>
                        <Table.Row>
                            {columns.map(item => (<TableHeader key={item} title={item} setSort={this.orderBy(item.toLowerCase())} column={this.state.column} field={item.toLowerCase()} />))}
                            <TableHeader title='Remove' />
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
