import React, { Component } from 'react';
import OrganizationCard from '../components/organization/OrganizationCard'
import { Placeholder, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getOrganization } from "../actions/organization";
import { getMyConnections } from "../actions/user";

class OrganizationProfile extends Component {

    state = {
        organization: {},
        isRequestSent: false,
        userId: null,
        myId: null
    }

    componentDidMount() {
        let { getOrganization, myId, getMyConnections } = this.props
        let userId = this.props.match.params.id
        getOrganization(userId)
        getMyConnections(myId)
        this.setState({
            userId,
            myId
        })
    }

    componentWillReceiveProps(newProps) {
        let { userId, myId } = this.state
        let { getMyConnections } = this.props
        let isMyConnection = false
        let isMe = false


        if (newProps.organization) {
            this.setState({
                organization: newProps.organization
            })
        }

        if (newProps.myId && newProps.myId != myId) {
            getMyConnections(newProps.myId)
            this.setState({
                myId: newProps.myId
            })
        }

        if (newProps.myId && newProps.myId == userId)
            isMe = true
        else if (newProps.myId)
            isMe = false

        if (newProps.myConnections) {
            this.setState({ myConnections: newProps.myConnections })
            let index = newProps.myConnections.findIndex(con => con.userId == userId)
            if (index < 0)
                isMyConnection = false
            else {
                isMyConnection = true
                this.setState({ organization: newProps.myConnections[index] })
            }
        }

        if (isMe || isMyConnection) {
            this.setState({
                showRequestBtn: false
            })
        } else {
            this.setState({
                showRequestBtn: true
            })
        }
    }

    render() {
        let { organization, showRequestBtn } = this.state
        return (
            <div>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <OrganizationCard showRequest={showRequestBtn} org={organization} />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <Placeholder>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                            <Placeholder>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>


            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        organization: state.organization,
        myConnections: state.myConnections,
        myId: state.myId
    }
}

const mapDispatchToProps = {
    getOrganization,
    getMyConnections
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganizationProfile);
