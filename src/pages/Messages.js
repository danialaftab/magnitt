import React from 'react';
import Messages from '../components/messages/Messages'
import MessagesMenu from '../components/messages/MessagesMenu'


const MessagesPage = () => (
    <div>
        <MessagesMenu/>
        <Messages/>
    </div>
)

export default MessagesPage;