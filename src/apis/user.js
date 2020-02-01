import mockData from '../mocks/data.json'

//Creating mock api calls with 2 seconds of delay

const UserApi = {
    getUser: (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let user = mockData.users.find(item => item.userId == id)
                resolve(user)
            }, 1000)
        })
    }
}

export default UserApi