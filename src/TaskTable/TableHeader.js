import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TableHeader.css';
import { Table } from 'semantic-ui-react'

export class TableHeader extends Component {
    drawSortButtons() {
        return (
            <div className='tableHeader-sort'>
                <div onClick={() => this.props.setSort(true)}>
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                </div>
                <div onClick={() => this.props.setSort(false)}>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
    render() {
        return (
            <Table.HeaderCell>
                <div className='tableHeader-divOuter'>
                    <div className="tableHeader-divInner">
                        <label>{this.props.title}</label>
                        {this.props.setSort && this.drawSortButtons()}
                    </div>
                </div>
            </Table.HeaderCell>
        )
    }
}

TableHeader.propTypes = {
    task: PropTypes.string,
    setSort: PropTypes.func
}
