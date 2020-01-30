import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
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

                    <Link to="/user">
                        <Menu.Item
                            name='friends'
                            active={activeItem === 'friends'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Search />
                </Menu>
            </Segment>
        )
    }
}