import React, { Component } from 'react';
import AddTask from '../AddTask';
import Filter from '../Filter';
import TaskTable from '../TaskTable';
import './TaskWrapper.css';


export class TaskWrapper extends Component {
    render() {

        return (
            <div className='TaskWrapper'>
                <AddTask />
                <Filter />
                <TaskTable />
            </div>
        );
    }
}

