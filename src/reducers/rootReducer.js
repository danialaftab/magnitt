import { GET_USER_SUCCESS, GET_CONNECTIONS_SUCCESS,
GET_ACCOUNTS_SUCCESS, SET_ACTIVE_ACCOUNTS_SUCCESS,
ADD_CONNECTION_SUCCESS, GET_REQUESTS_SUCCESS } from '../actions/user'

import { SEARCH_SUCCESS } from '../actions/search'
import { GET_ORGANIZATION_SUCCESS } from '../actions/organization'
import { ACCOUNT_TYPES } from '../const'


const initState = {
    users: [],
    user: {},
    organization: {},
    searchResults: [],
    myConnections: [],
    myAccounts: [],
    myId: 1,        //initiallizing id as Danial Aftab, In production would be set by login event
    myType: ACCOUNT_TYPES.USER,   //initializing logged in type as user
    requests: []
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

        case GET_CONNECTIONS_SUCCESS:
            return Object.assign({}, state, {
                myConnections: action.payload
            })

        case GET_ACCOUNTS_SUCCESS:
            return Object.assign({}, state, {
                myAccounts: action.payload
            })

        case SET_ACTIVE_ACCOUNTS_SUCCESS:
            return Object.assign({}, state, {
                myId: action.payload.id,
                myType: action.payload.type
            })

        case ADD_CONNECTION_SUCCESS:
            return Object.assign({}, state, {
                //just mock api so do not need any response
            })

        case GET_REQUESTS_SUCCESS:
            return Object.assign({}, state, {
                requests: action.payload
            })

        default:
            return state
    }
}

export default rootReducer