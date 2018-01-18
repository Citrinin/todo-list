import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

TableRow.propTypes={
    checked:PropTypes.bool,
    title:PropTypes.string,
    priority:PropTypes.string,
    date:PropTypes.string
}

export default TableRow;