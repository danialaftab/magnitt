import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'
import UserCard from '../components/user/UserCard'
import UserOrganizations from '../components/user/UserOrganizations'
import UserActivity from '../components/user/UserActivity'
import { connect } from 'react-redux'
import { getUser } from "../actions/user";

class UserProfile extends Component {
    state = {
        user: {}
    }

    componentDidMount(){
        let {getUser} = this.props
        let userId = this.props.match.params.id  
        getUser(userId)
    }

    componentWillReceiveProps(newProps) {
        if(newProps.user){
            this.setState({
                user: newProps.user
            })
        }
    }


    render() {
        let {user} = this.state
        
        return (
            <div>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <UserCard user={user} />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <UserActivity user={user} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <UserOrganizations organizations={user.organizations} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    getUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);
