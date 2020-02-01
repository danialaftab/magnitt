import {GET_USER_SUCCESS} from '../actions/user'

const initState = {
    users: [
        { userId: 1, name: 'Danial Aftab', avatar: '/avatars/small/elliot.jpg', connections: 21 },
        { userId: 2, name: 'Peter Parker', avatar: '/avatars/small/elliot.jpg', connections: 16 },
        { userId: 3, name: 'Bruce Wayne', avatar: '/avatars/small/elliot.jpg', connections: 3 },
        { userId: 4, name: 'Tony Stark', avatar: '/avatars/small/elliot.jpg', connections: 43 },
        { userId: 5, name: 'Selina Kyle', avatar: '/avatars/small/jenny.jpg', connections: 24 }
    ],

    user: {}
}

const rootReducer = (state = initState, action) => {
    console.log("@Action: ", action)

    switch (action.type) {
        case GET_USER_SUCCESS:
            return Object.assign({}, state, {
                user: action.payload
            })
           
        default:
            return state
    }
}

export default rootReducer