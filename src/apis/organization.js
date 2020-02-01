import mockData from '../mocks/data.json'

//Creating mock api calls with 1 seconds of delay

const OrganizationApi = {
    getOrganization: (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let organization = mockData.organizations.find(item => {
                    return (item.org_id == id)
                })
                resolve(organization)
            }, 1000)
        })
    }
}

export default OrganizationApi