import React, { Component } from 'react'
import { Menu, Segment, Dropdown, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Search from './Search'

export default class MenuExampleInvertedSecondary extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Link to="/">
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        />
                    </Link>

                    <Link to="/messages">
                        <Menu.Item
                            name='messages'
                            active={activeItem === 'messages'}
                            onClick={this.handleItemClick}
                        />
                    </Link>

                    <Link to="/connections">
                        <Menu.Item
                            name='connections'
                            active={activeItem === 'friends'}
                            onClick={this.handleItemClick}
                        />
                    </Link>

                    {/* <Menu.Item> */}
                        <Search />
                    {/* </Menu.Item>     */}

                    <Menu.Menu position='right' >
                        <Dropdown item text='Using as' >
                            <Dropdown.Menu>
                                <Dropdown.Item>Danial Aftab</Dropdown.Item>
                                <Dropdown.Item>Acme inc</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item>
                            <Button primary>Log out</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Segment>
        )
    }
}