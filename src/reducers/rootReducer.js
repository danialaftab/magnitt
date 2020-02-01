import { GET_USER_SUCCESS } from '../actions/user'
import { SEARCH_SUCCESS } from '../actions/search'
import { GET_ORGANIZATION_SUCCESS } from '../actions/organization'

const initState = {
    users: [],
    user: {},
    organization: {},
    searchResults : []
}

const rootReducer = (state = initState, action) => {
    console.log("@Action: ", action)

    switch (action.type) {
        case GET_USER_SUCCESS:
            return Object.assign({}, state, {
                user: action.payload
            })

        case SEARCH_SUCCESS:
        {
            return Object.assign({}, state, {
                searchResults: action.payload
            })
        }

        case GET_ORGANIZATION_SUCCESS:
            return Object.assign({}, state, {
                organization: action.payload
            })
           

        default:
            return state
    }
}

export default rootReducer