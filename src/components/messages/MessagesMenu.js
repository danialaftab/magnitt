import React, { Component } from 'react'
import { Input, Label, Menu, Image, Feed } from 'semantic-ui-react'

export default class MenuExampleSizeVerticalLarge extends Component {
    state = { activeItem: 'inbox' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu size='large' vertical>
                <Menu.Item>
                    <Input icon='search' placeholder='Search mail...' />
                </Menu.Item>
                <Menu.Item
                    name='inbox'
                    active={activeItem === 'inbox'}
                    onClick={this.handleItemClick}
                >

                    <Label color='teal'>1</Label>
                    
                    <Image src={'/avatars/small/elliot.jpg'} size='mini' />
                    Matt Murdock
        </Menu.Item>

                <Menu.Item
                    name='spam'
                    active={activeItem === 'spam'}
                    onClick={this.handleItemClick}
                >
                    {/* <Label>51</Label> */}
                    <Image src={'/avatars/small/elliot.jpg'} size='mini' />
                    Peter Parker
        </Menu.Item>

                <Menu.Item
                    name='updates'
                    active={activeItem === 'updates'}
                    onClick={this.handleItemClick}
                >
                    {/* <Label>1</Label> */}
                    <Image src={'/avatars/small/elliot.jpg'} size='mini' />
                    Dany Aftab
        </Menu.Item>

            </Menu>
        )
    }
}