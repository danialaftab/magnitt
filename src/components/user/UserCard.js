import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card>
    <Image src='/avatars/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew Vaughn</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
        
      </Card.Description>
      
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Connections
      </a>
    </Card.Content>

    <Card.Content extra>
      <Button primary> + Send Connection Request</Button>
    </Card.Content>
  </Card>
)

export default CardExampleCard