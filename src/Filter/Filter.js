import React, { Component } from 'react'
import { DatePicker } from '../DatePicker'
import './Filter.css'
import { Form, Header, Segment, Checkbox } from 'semantic-ui-react'

export class Filter extends Component {
    render() {
        return (
            <div>
                <Header attached='top' as='h2'>Filter</Header>
                <Segment attached>
                    <Form>
                        <Form.Group>
                            <Form.Field>
                                <Checkbox
                                    checked={this.props.filter.showComplited}
                                    onClick={(ev, checkData) => this.props.onFilterUpdate({ showComplited: checkData.checked })} label='Show completed' />
                            </Form.Field>
                            <DatePicker placeholder='Date From' onChange={(ev) => this.props.onFilterUpdate({ startDate: ev.target.value })} />
                            <DatePicker placeholder='Date To' onChange={(ev) => this.props.onFilterUpdate({ endDate: ev.target.value })} />

                        </Form.Group>

                        <input className='Filter-text' placeholder='Text search (title + description)' onChange={(ev) => this.props.onFilterUpdate({ textSearch: ev.target.value.toLowerCase() })} />
                    </Form>
                </Segment>
            </div>
        )
    }
}
