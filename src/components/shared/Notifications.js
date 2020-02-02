import React, { Component } from 'react'
import { Dropdown, Button } from 'semantic-ui-react'
import { getAllRequests, acceptRequest } from '../../actions/user'
import { connect } from 'react-redux'
class Notifications extends Component {
    state = {
        requests: [],
        isLoading: false,
        myId: this.props.myId
    }

    componentDidMount() {
        let { getAllRequests, myId } = this.props
        getAllRequests(myId)
        this.setState({isLoading : true})
    }

    componentWillReceiveProps(newProps) {
        let { myId } = this.state
        let { getAllRequests } = this.props

        if (newProps.requests) {
            this.setState({isLoading : false})
            this.setState({
                requests: newProps.requests
            })
        }

        if (newProps.myId && newProps.myId != myId) {
            this.setState({ myId: newProps.myId, isLoading : true })
            getAllRequests(newProps.myId)
        }
    }

    accept = (reqId) => {
        let {acceptRequest} = this.props
        let {myId} = this.state

        acceptRequest(reqId, myId, true)
        this.removeRequest(reqId)
    }

    reject = (reqId) => {
        let {acceptRequest} = this.props
        let {myId} = this.state
        acceptRequest(reqId, myId, false)
        this.removeRequest(reqId)
    }

    removeRequest = (reqId) => {
        let {requests} = this.state
       
        let index = requests.findIndex(req => req.requestId == reqId)
        if(index >= 0){
            requests.splice(index, 1)
            this.setState({
                requests
            })
        }
    }

    render() {
        let { requests, isLoading } = this.state

        return (<Dropdown
            style={{ marginTop: '-35px' }}
            text=''
            icon='bell'
            floating
            className='icon'
            loading={isLoading}
        >
            <Dropdown.Menu>
                <Dropdown.Header content='' />
                {requests.map((option, idx) => (
                    <Dropdown.Item key={idx} >
                        <p>{option.name + ' sent you a connection request'}</p>
                        <Button.Group>
                            <Button positive onClick={() => this.accept(option.requestId)}>Accept</Button>
                            <Button.Or />
                            <Button onClick={() => this.reject(option.requestId)}>Reject</Button>
                        </Button.Group>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        requests: state.requests,
        myId: state.myId
    }
}

const mapDispatchToProps = {
    getAllRequests,
    acceptRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notifications);
