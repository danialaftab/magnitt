import React from 'react';
import UserCard from '../components/user/UserCard'
import UserOrganizations from '../components/user/UserOrganizations'
import UserActivity from '../components/user/UserActivity'


const user = () => (
    <div>
        <UserCard/>
        <UserOrganizations/>
        <UserActivity/>
    </div>
)

export default user;
