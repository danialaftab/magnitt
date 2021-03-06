import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react'
import Feed from '../components/home/Feed'
import { connect } from 'react-redux'

class Home extends Component {

    render() {
        return (
            <div>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header as='h3' icon='feed' content='Feed' />
                            <Feed />
                        </Grid.Column>
                       
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        suggestedUsers: state.suggestedUsers
    }
}

export default connect(mapStateToProps)(Home);
