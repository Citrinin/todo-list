import React, { Component } from 'react'
import { TodoMenu } from '../TodoMenu'
import { TaskWrapper } from '../TaskWrapper';
import { Calendar } from '../Calendar';

const MENU = [{
    color: 'purple',
    title: 'To-do list',
    component: <TaskWrapper />
},
{
    color: 'blue',
    title: 'Calendar',
    component: <Calendar />
},
{
    color: 'teal',
    title: 'About',
    position: 'right',
    component: <label>Todo list for everyone</label>
}]


export class TodoApp extends Component {
    state = {
        active: MENU[0]
    }
    changeItem = (index) => {
        this.setState({ active: MENU[index] })
    }
    render() {
        return (
            <div className='App'>
                <TodoMenu menu={MENU} changeItem={this.changeItem} active={this.state.active} />
                <div className='AppContent'>
                    {this.state.active.component}
                </div>
            </div>
        )
    }
}
