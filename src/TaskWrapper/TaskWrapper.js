import React, { Component } from 'react';
import { AddTask } from '../AddTask';
import { Filter } from '../Filter';
import { TaskTable } from '../TaskTable';
import { getTasks, addTask, removeTask, updateTask } from '../utils/apiWrapper';
import './TaskWrapper.css';



export class TaskWrapper extends Component {
    state = {
        tasks: [],
        filter: {
            showComplited: true
        }
    }
    componentWillMount() {
        getTasks().then(tasks => this.setState({ tasks: tasks }));
    }
    addTask = (taskData) => {
        addTask(taskData).then(taskData =>
            this.setState({
                tasks: [...this.state.tasks, taskData]
            }))
    }
    removeTask = (id) => {
        let tasks = this.state.tasks;
        this.setState({ tasks: this.state.tasks.filter(item => item.id !== id) });
        removeTask(id).catch(() => this.setState({ tasks: tasks }));
    }
    updateTask = (id, changes) => {
        updateTask(id, changes).then((updatedItem) => this.setState({
            tasks: this.state.tasks.map(item => item.id === id ? { ...item, ...updatedItem } : item)
        }))
    }

    onFilterUpdate = (changes) => {
        this.setState({
            filter: {
                ...this.state.filter,
                ...changes
            }
        });
    }

    render() {
        const {
            tasks,
            filter,
            filter: { showComplited, startDate, endDate, textSearch }


        } = this.state;

        let filteredTasks = showComplited ? tasks : tasks.filter(item => !item.checked);
        filteredTasks = startDate ? filteredTasks.filter(item => item.date >= startDate) : filteredTasks;
        filteredTasks = endDate ? filteredTasks.filter(item => item.date <= endDate) : filteredTasks;
        filteredTasks = textSearch ? filteredTasks.filter(item => (item.title.toLowerCase().indexOf(textSearch)) >= 0 || (item.description && (item.description.toLowerCase().indexOf(textSearch))) >= 0) : filteredTasks;

        return (
            <div className='TaskWrapper'>
                <AddTask onSubmit={this.addTask} />
                <Filter filter={filter} onFilterUpdate={this.onFilterUpdate} />
                <TaskTable tasks={filteredTasks} removeTask={this.removeTask} updateTask={this.updateTask} />
            </div>
        );
    }
}

