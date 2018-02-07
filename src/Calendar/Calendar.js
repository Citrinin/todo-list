import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react'

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export class Calendar extends Component {
    state = {
        date: new Date()
    }
    getBeginDate(year, month) {
        let beginDate = new Date(year, month - 1, 1);
        let diff = 2 - beginDate.getDay();
        if (diff === 2) {
            beginDate.setDate(-5);
        } else {
            beginDate.setDate(diff);
        }
        return beginDate;
    }
    getCalendar() {
        let beginDate = this.getBeginDate(this.state.date.getFullYear(), this.state.date.getMonth() + 1)
        let calendarArray = [];
        let calendarRow;
        for (let week = 1; week <= 6; week++) {
            calendarRow = [];
            for (let day = 1; day <= 7; day++) {
                calendarRow.push({
                    date: beginDate.toLocaleDateString(),
                    day: beginDate.getDate(),
                    disabled: beginDate.getMonth() !== this.state.date.getMonth()
                });
                beginDate.setDate(beginDate.getDate() + 1);
            }
            calendarArray.push(calendarRow);

        }
        return calendarArray;
    }
    drawContent() {
        return <Table.Body>
            {this.getCalendar().map((calendarRow, index) =>
                <Table.Row key={index}>
                    {calendarRow.map(day =>
                        <Table.Cell disabled={day.disabled} key={day.date}>{day.day}</Table.Cell>)}
                </Table.Row>)}
        </Table.Body>;
    }
    drawHeader() {
        return <Table.Header>
            <Table.Row textAlign='center'>
                <Table.HeaderCell onClick={() => this.changeMonth(-1)}><Icon name='chevron left' /></Table.HeaderCell>
                <Table.HeaderCell colSpan='5'>{this.state.date.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</Table.HeaderCell>
                <Table.HeaderCell onClick={() => this.changeMonth(1)}><Icon name='chevron right' /></Table.HeaderCell>

            </Table.Row>
            <Table.Row>
                {DAYS_OF_WEEK.map(item => <Table.HeaderCell key={item}>{item}</Table.HeaderCell>)}
            </Table.Row>
        </Table.Header>;
    }
    changeMonth(difference) {

        let { date } = this.state;
        let newDate = new Date(date.getFullYear(), date.getMonth() + difference, 1);
        this.setState({ date: newDate });
    }
    render() {

        return (
            <Table celled>
                {this.drawHeader()}
                {this.drawContent()}
            </Table>
        )
    }
}