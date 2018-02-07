import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


export class TodoMenu extends Component {

    handleMenuClick = (e, target) => { this.props.changeItem(target.order) }


    render() {


        return (
            <Menu>
                {this.props.menu.map((menuItem, index) => (
                    <Menu.Item key={index} name={menuItem.title} active={this.props.active === menuItem} color={menuItem.color} order={index} onClick={this.handleMenuClick} />
                ))}
                <Menu.Menu position='right'>
                    <Menu.Item name='signup' active={this.props.active === 'signup'} onClick={this.handleMenuClick}>
                        Log-in
                    </Menu.Item>
                </Menu.Menu>
            </Menu>


        )
    }
}