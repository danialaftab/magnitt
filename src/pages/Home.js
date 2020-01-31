import React from 'react';
import { Header, Grid } from 'semantic-ui-react'
import Feed from '../components/home/Feed'
import Notifications from '../components/shared/Notifications'


const Home = () => (
    <div>
        <Grid columns={2} divided>
            <Grid.Row>
                {/* <Grid.Column width={2}>

                </Grid.Column> */}
                <Grid.Column width={12}>
                <Header as='h3' icon='feed' content='Feed' />
                    <Feed />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Notifications/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
    </div>
)

export default Home;
