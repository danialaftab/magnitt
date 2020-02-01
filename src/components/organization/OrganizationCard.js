import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const OrganizationCard = (props) => {
  let org = props.org
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

    <Card.Content extra>
      <Button primary> + Send Connection Request</Button>
    </Card.Content>
  </Card>
)
  }

export default OrganizationCard