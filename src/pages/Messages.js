import React from 'react';
import { Grid } from 'semantic-ui-react'
import Messages from '../components/messages/Messages'
import MessagesMenu from '../components/messages/MessagesMenu'


const MessagesPage = () => (
    <div>
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column width={4}>
                    <MessagesMenu />
                </Grid.Column>

                <Grid.Column width={12}>
                    <Messages />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default MessagesPage;