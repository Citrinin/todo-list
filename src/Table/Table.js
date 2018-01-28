import React, { Component } from 'react';
import TableRow from './TableRow';
import './Table.css';

class Table extends Component {
    render() {
        return(
            <table className='Table'>
                <tbody >
                    <tr>
                        <th>Done</th>
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Date</th>
                    </tr>
                    <TableRow checked={true} title='Покормить кошика' priority='high' date='2017-01-08' />
                    <TableRow checked={false} title='Спасти мир' priority='low' date='2020-01-01' />
                    <TableRow checked={false} title='Вынести мусор' priority='high' date='2019-03-12' />
                    <TableRow checked={false} title='Сделать дз' priority='ultra' date='2018-01-18' />
                </tbody>
            </table>
        )
    }
}

export default Table;