import React from 'react';
import UserCard from '../components/user/UserCard'
import UserOrganizations from '../components/user/UserOrganizations'
import UserActivity from '../components/user/UserActivity'


const UserProfile = () => (
    <div>
        <UserCard/>
        <UserOrganizations/>
        <UserActivity/>
    </div>
)

export default UserProfile;
