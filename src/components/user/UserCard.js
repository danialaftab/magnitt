import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const UserCard = (props) => {
  let user = props.user
  return (
  <Card>
    <Image src={user.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{user.name}</Card.Header>
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

    <Card.Content extra>
      <Button primary> + Send Connection Request</Button>
    </Card.Content>
  </Card>
)
  }

export default UserCard