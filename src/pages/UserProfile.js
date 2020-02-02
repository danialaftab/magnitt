import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'
import UserCard from '../components/user/UserCard'
import UserOrganizations from '../components/user/UserOrganizations'
import UserActivity from '../components/user/UserActivity'
import { connect } from 'react-redux'
import { getUser, getMyConnections } from "../actions/user";

class UserProfile extends Component {
    state = {
        user: {},
        showRequestBtn: true,
        userId: null,
        myId: null,
        myConnections : []
    }

    componentDidMount() {
        let { getUser, myId, getMyConnections } = this.props
        let userId = this.props.match.params.id
        getUser(userId)
        getMyConnections(myId)
        this.setState({
            userId,
            myId
        })
    }

    componentWillReceiveProps(newProps) {
        let { userId, myId } = this.state
        let {getMyConnections} = this.props
        let isMyConnection = false
        let isMe = false

        if (newProps.user) {
            this.setState({
                user: newProps.user
            })
        }

        if(newProps.myId && newProps.myId != myId){
            getMyConnections(newProps.myId)
            this.setState({
                myId : newProps.myId
            })
        }

        if (newProps.myId && newProps.myId == userId)
            isMe = true
        else if (newProps.myId)
            isMe = false

           
        if (newProps.myConnections) {
            this.setState({ myConnections : newProps.myConnections})
            let index = newProps.myConnections.findIndex(con => con.userId == userId)
            if (index < 0)
                isMyConnection = false
            else {
                isMyConnection = true
                this.setState({user: newProps.myConnections[index] })
            }
               
        }

        if(isMe || isMyConnection){
            this.setState({
                showRequestBtn: false
            })
        } else{
            this.setState({
                showRequestBtn: true
            })
        }
    }


    render() {
        let { user, showRequestBtn, myConnections, myId } = this.state

        return (
            <div>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <UserCard showRequest={showRequestBtn} user={user} myId={myId}/>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <UserActivity user={user} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <UserOrganizations showRequest={false} organizations={user.organizations} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        myId: state.myId,
        myConnections: state.myConnections
    }
}

const mapDispatchToProps = {
    getUser,
    getMyConnections
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);
