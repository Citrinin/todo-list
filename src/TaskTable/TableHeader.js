import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TableHeader.css';
import { Table } from 'semantic-ui-react'

export class TableHeader extends Component {

    state = {
        direction: null
    }
    render() {
        return (
            <Table.HeaderCell
                sorted={this.props.column === this.props.field ? this.state.direction : null}
                onClick={() => {
                    if (this.props.setSort) {
                        var dir = this.state.direction === 'ascending' ? 'descending' : 'ascending'
                        this.setState({ direction: dir })
                        this.props.setSort(dir === 'ascending');
                    }
                }} >
                <label>{this.props.title}</label>
            </Table.HeaderCell>
        )
    }
}

TableHeader.propTypes = {
    task: PropTypes.string,
    setSort: PropTypes.func
}
