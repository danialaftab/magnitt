import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addConnection } from "../../actions/user"

class UserCard extends Component {
  state = {
    isRequestSent: false
  }

  render() {
    let { addConnection, user, myId } = this.props
    let { isRequestSent } = this.state
    let id = (user.userId) ? user.userId : 0
    let showRequestBtn = this.props.showRequest

    let requestBtn = (showRequestBtn) ?
      (isRequestSent) ?
      <Card.Content extra>Request Sent</Card.Content>
          : <Card.Content extra>
          <Button primary onClick={() => {
            addConnection(myId, id)
            this.setState({ isRequestSent: true })
          }}> + Send Connection Request</Button>
        </Card.Content> : <Card.Content extra>{(user.status) ? user.status: 'Connected'}</Card.Content>

    return (
      <Card>
        <Image src={user.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header><a href={`/${user.type}/${id}`} >{user.name}</a></Card.Header>
          <Card.Meta>
            <span className='date'>Joined in {user.joinedIn}</span>
          </Card.Meta>
          <Card.Description>
            {user.description}
          </Card.Description>

        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {user.connections} Connections
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
)(UserCard);