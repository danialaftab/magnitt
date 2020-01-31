import React from 'react';
import { Grid, Container } from 'semantic-ui-react'
import UserCard from '../components/user/UserCard'
import UserOrganizations from '../components/user/UserOrganizations'
import UserActivity from '../components/user/UserActivity'


const UserProfile = () => (
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

export default UserProfile;
