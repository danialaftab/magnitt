import React, { Component } from 'react'
import { Menu, Segment, Dropdown, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Search from './Search'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { getMyAccounts, setActiveAccount } from "../../actions/user";

class TopMenu extends Component {
    state = {
        activeItem: 'home',
        accounts: [],
        activeAccount: 'Loading...',
        mock: false
    }

    componentDidMount() {
        let { getMyAccounts, myId } = this.props
        getMyAccounts(myId)
        let m = this.props.match
        let urlArr = window.location.href.split('/')
        this.setState({
            activeItem : urlArr[urlArr.length -1]
        })
    }

    componentWillReceiveProps(newProps) {
        if (newProps.myAccounts && newProps.myId) {
            let active = newProps.myAccounts.find(account => account.id == newProps.myId)
            this.setState({
                accounts: newProps.myAccounts,
                activeAccount: {
                    name: active.name,
                    id: active.id
                }
            })
        }
    }

    handleItemClick = (e, account) => {
        console.log("test: ", account)
        this.setState({ activeItem: account.name })
    }

    handleAccountChange = async (e, { id, name }) => {
        let { setActiveAccount } = this.props
        let { activeAccount } = this.state

        setActiveAccount(activeAccount.id, id)

        this.setState({
            activeAccount: {
                name,
                id
            }
        })
    }

    renderAccounts = () => {
        let { accounts } = this.state
        return accounts.map((account, idx) =>
            <Dropdown.Item
                onClick={this.handleAccountChange}
                name={account.name}
                id={account.id}
                key={idx}
            >
                {account.name}
            </Dropdown.Item>)
    }

    render() {
        const { activeItem, activeAccount } = this.state

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item >
                        <Link to="/">
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}
                            />
                        </Link>
                    </Menu.Item>
                    {/* <Menu.Item >
                        <Link to="/messages">
                            <Menu.Item
                                name='messages'
                                active={activeItem === 'messages'}
                                onClick={this.handleItemClick}
                            />
                        </Link>
                    </Menu.Item> */}
                    <Menu.Item >
                        <a href="/connections">
                            <Menu.Item
                                name='connections'
                                active={activeItem === 'connections'}
                                onClick={this.handleItemClick}
                            />
                        </a>
                    </Menu.Item>


                    <Menu.Item position='right'>
                        <Search />
                    </Menu.Item>



                    <Menu.Menu position='right' >

                        <Menu.Item>
                            Using as
                            <Dropdown item text={activeAccount.name} >
                                <Dropdown.Menu>
                                    {this.renderAccounts()}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>

                        <Menu.Item position='right'>
                            <Notifications />
                        </Menu.Item>

                        {/* <Menu.Item> */}
                        {/* <Button primary>Log out</Button> */}
                        {/* </Menu.Item> */}
                    </Menu.Menu>
                </Menu>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myAccounts: state.myAccounts,
        myId: state.myId
    }
}

const mapDispatchToProps = {
    getMyAccounts,
    setActiveAccount
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopMenu);