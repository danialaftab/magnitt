import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react'
import { getMyConnections } from "../actions/user";
import UserCard from "../components/user/UserCard"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class Connections extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            myId : null
        }
    }

    componentDidMount() {
        let { getMyConnections, myId } = this.props
        this.setState(
            {myId}
        )

        getMyConnections(myId)
    }

    componentWillReceiveProps(newProps) {
        let {myId} = this.state
        let {getMyConnections} = this.props
        if(newProps.myId && myId != newProps.myId){
            this.setState({
                myId: newProps.myId
            })

            getMyConnections(newProps.myId)
        }

        if (newProps.myConnections) {
            this.setState({
                users: newProps.myConnections
            })
        }
    }

    renderUserColumns = (idx) => {
        let { users } = this.state
        let result = []
        for (let i = idx, count = 0; i < users.length; i++) {
            if (count == 4) {
                break;
            }

            count++
            result.push(
                <Grid.Column width={4} key={i}>
                    <UserCard user={users[i]} showRequest={false} />
                </Grid.Column>
            )
        }
        return result
    }

    renderProfiles = () => {
        let { users } = this.state
        let numRows = Math.ceil(users.length / 4)
        let result = []
        let userIndex = 0
        for (let i = 0; i < numRows; i++) {
            result.push(
                <Grid.Row key={i}>
                    {this.renderUserColumns(userIndex)}
                </Grid.Row>
            )
        }

        return result
    }

    render() {
        return (
            <div>
                <Header as='h3' icon='feed' content='My Connections' />
                <Grid columns={4}>
                    {this.renderProfiles()}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        myConnections: state.myConnections,
        myId: state.myId
    }
}

const mapDispatchToProps = {
    getMyConnections
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Connections))
