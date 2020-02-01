import mockData from '../mocks/data.json'
import _ from 'lodash'

//Creating mock api calls with 1 seconds of delay

const SearchApi = {
    searchAll: (searchQry) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const re = new RegExp(_.escapeRegExp(searchQry), 'i')
                const isMatch = (result) => re.test(result.name)
                let searchResultUsers = _.filter(mockData.users, isMatch)
                let searchResultOrgs = _.filter(mockData.organizations, isMatch)
                let searchResult = [...searchResultUsers, ...searchResultOrgs]
                // let user = mockData.users.find(item => item.name == searchQry)
                resolve(searchResult)
            }, 1000)
        })
    }
}

export default SearchApi