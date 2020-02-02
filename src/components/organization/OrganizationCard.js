import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addConnection } from "../../actions/user"

class OrganizationCard extends Component {
  state = {
    isRequestSent: false
  }


  render() {
    let { addConnection, org, myId } = this.props
    let { isRequestSent } = this.state
    let id = (org.userId) ? org.userId : 0
    let showRequestBtn = this.props.showRequest

    let requestBtn = (showRequestBtn) ?
    (isRequestSent) ?
    <Card.Content extra>Request Sent</Card.Content>
        : <Card.Content extra>
        <Button primary onClick={() => {
          addConnection(myId, id)
          this.setState({ isRequestSent: true })
        }}> + Send Connection Request</Button>
      </Card.Content> : <Card.Content extra>{(org.status) ? org.status: 'Connected'}</Card.Content>

    return (
      <Card>
        <Image src={org.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{org.name}</Card.Header>
          <Card.Description>
            {org.description}
          </Card.Description>

        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='org' />
            {org.connections} Connections
      </a>
        </Card.Content>

        {requestBtn}
      </Card>
    )
  }
}

const mapDispatchToProps = {
  addConnection
}

export default connect(
  null,
  mapDispatchToProps
)(OrganizationCard);