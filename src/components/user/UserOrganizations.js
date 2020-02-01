import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const UserOrganizations = (props) => {
  let companyCards
  if (props.organizations)
    companyCards = props.organizations.map((org, idx) =>
      <Card
        key={idx}
        href='#'
      >
        <Card.Content>
          <Card.Header>{org.name}</Card.Header>
          <Card.Description>
            {org.description}
          </Card.Description>

        </Card.Content>
        <Card.Content extra>
          <Button primary> + Send Connection Request</Button>
        </Card.Content>
      </Card>
    )
  else
    companyCards = []

  return (
    companyCards
  )
}

export default UserOrganizations