import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addConnection } from "../../actions/user"

class UserOrganizations extends Component {
 
  render() {
    let companyCards
    let {connections, organizations, myId, addConnection} = this.props
    // let {isRequestSent} = this.state

    if (organizations)
      companyCards = organizations.map((org, idx) => {
        // let index = connections.findIndex(con => con.userId == org.userId)

        // let requestBtn = (index > 0 || myId == org.userId) ?
        //   <Card.Content extra>Connected</Card.Content> :
        //   (isRequestSent) ?  <Card.Content extra>Request Sent</Card.Content>  :
        //   <Card.Content extra>
        //     <Button primary onClick={(e) => {
        //         e.preventDefault()
        //         addConnection(myId, org.userId)
        //         this.setState({isRequestSent: true})
        //     }}> + Send Connection Request</Button>
        //   </Card.Content>

        return (
          <Card
            key={idx}
            href={`/organization/${org.userId}`}
          >
            <Card.Content>
              <Card.Header>{org.name}</Card.Header>
              <Card.Description>
                {org.description}
              </Card.Description>

            </Card.Content>
          </Card>
        )
      })
    else
      companyCards = []


    return (
      companyCards
    )
  }

}

const mapDispatchToProps = {
  addConnection
}

export default connect(
  null,
  mapDispatchToProps
)(UserOrganizations);