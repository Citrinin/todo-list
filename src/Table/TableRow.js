import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return(
            <tr>
               <td> <input type='checkbox' defaultChecked={this.props.checked} /></td>
               <td>{this.props.title}</td>
               <td> {this.props.priority}</td>
               <td> <input type='date' disabled value={this.props.date}></input></td>
            </tr>
        )
    }
}

export default TableRow;