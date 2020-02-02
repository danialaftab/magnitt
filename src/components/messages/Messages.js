import React from 'react'
import { Button, Comment, Form, Header, Segment } from 'semantic-ui-react'

const CommentExampleComment = () => (
    <Segment>
        <Comment.Group>
            <Header as='h3' dividing>
                Messages
    </Header>

            <Comment>
                <Comment.Avatar src='/avatars/small/elliot.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Matt</Comment.Author>
                    <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>How artistic!</Comment.Text>
                    {/* <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions> */}
                </Comment.Content>
            </Comment>

            <Comment>
                <Comment.Avatar src='/avatars/small/elliot.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                    <Comment.Metadata>
                        <div>Yesterday at 12:30AM</div>
                    </Comment.Metadata>
                    <Comment.Text>
                        <p>This has been very useful for my research. Thanks as well!</p>
                    </Comment.Text>
                
                </Comment.Content>
            </Comment>

            <Comment>
                <Comment.Avatar src='/avatars/small/jenny.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Joe Henderson</Comment.Author>
                    <Comment.Metadata>
                        <div>Just now</div>
                    </Comment.Metadata>
                    <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                </Comment.Content>
            </Comment>

            <Form reply>
                <Form.TextArea />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
        </Comment.Group>
    </Segment>
)

export default CommentExampleComment