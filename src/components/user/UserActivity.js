import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

const CardExampleContentBlock = (props) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>Recent Activity</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='/avatars/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              {props.user.name} added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='/avatars/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              {props.user.name} added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='/avatars/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              {props.user.name} added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
)

export default CardExampleContentBlock