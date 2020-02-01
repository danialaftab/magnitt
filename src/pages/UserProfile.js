import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'
import UserCard from '../components/user/UserCard'
import UserOrganizations from '../components/user/UserOrganizations'
import UserActivity from '../components/user/UserActivity'
import { useParams } from "react-router-dom";
import { connect } from 'react-redux'
import { getUser } from "../actions/user";
import { render } from '@testing-library/react';

class UserProfile extends Component {
    componentDidMount(){
        let {getUser} = this.props
        getUser()
    }

    getDerivedStateFromProps(nextProps, prevState){
        console.log("new props:  ", nextProps)
    //     if(nextProps.someValue!==prevState.someValue){
    //       return { someState: nextProps.someValue};
    //    }
    //    else return null;
    }


    render() {
        // let { id } = useParams();
        return (
            <div>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <UserCard />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <UserActivity />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <UserOrganizations />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("users:  :", state.user);

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
