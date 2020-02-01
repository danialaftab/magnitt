import React, { Component } from 'react';
import OrganizationCard from '../components/organization/OrganizationCard'
import { connect } from 'react-redux'
import { getOrganization } from "../actions/organization";

class OrganizationProfile extends Component {

    state = {
        organization: {}
    }

    componentDidMount(){
        let {getOrganization} = this.props
        let orgId = this.props.match.params.id  
        getOrganization(orgId)
    }

    componentWillReceiveProps(newProps) {
        if(newProps.organization){
            this.setState({
                organization: newProps.organization
            })
        }
    }


    render() {
        let {organization} = this.state
        return (
            <div>
                <OrganizationCard org={organization}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        organization: state.organization
    }
}

const mapDispatchToProps = {
    getOrganization
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganizationProfile);
