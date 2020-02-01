const initState = {
    posts : [
        {id: 1}
    ],
    suggestedUsers : [
        {userId:0, name: 'Danial Aftab', avatar: '/avatars/small/elliot.jpg', connections: 23},
        {userId:0, name: 'Peter Parker', avatar: '/avatars/small/elliot.jpg', connections: 23},
        {userId:0, name: 'Bruce Wayne', avatar: '/avatars/small/elliot.jpg', connections: 23},
        {userId:0, name: 'Tony Stark', avatar: '/avatars/small/elliot.jpg', connections: 23},
        {userId:0, name: 'Selina Kyle', avatar: '/avatars/small/jenny.jpg', connections: 23}
    ],

    users: [
        {userId:1, name: 'Danial Aftab', avatar: '/avatars/small/elliot.jpg', connections: 21},
        {userId:2, name: 'Peter Parker', avatar: '/avatars/small/elliot.jpg', connections: 16},
        {userId:3, name: 'Bruce Wayne', avatar: '/avatars/small/elliot.jpg', connections: 3},
        {userId:4, name: 'Tony Stark', avatar: '/avatars/small/elliot.jpg', connections: 43},
        {userId:5, name: 'Selina Kyle', avatar: '/avatars/small/jenny.jpg', connections: 24}
    ]
}

const rootReducer = (state = initState, action) => {
    return state
}

export default rootReducer