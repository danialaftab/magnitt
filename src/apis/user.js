import mockData from '../mocks/data.json'

//Creating mock api calls with 1 seconds of delay

const UserApi = {
    getUser: (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let user = mockData.users.find(item => item.userId == id)
                resolve(user)
            }, 1000)
        })
    },

    getConnections: (myId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let myUser = mockData.myAccounts.find(account => account.id == myId)
                resolve(myUser.connections)
            }, 1000)
        })
    },

    addToConnections: (myId, idToAdd) => {
        //mock payload
        let payload = {
            myId : myId,
            idToAdd : idToAdd
        }

        console.log("@Payload: ", payload)

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                
                resolve({
                    status: "ok"
                })
            }, 1000)
        })
    },

    getAllAcounts: (userId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let connections = mockData.myAccounts
                resolve(connections)
            }, 1000)
        })
    },

    setActiveAccount: (originalId, newId, newType) => {
         //mock payload
         let payload = {
            originalId : originalId,
            newId: newId
        }
        return new Promise((resolve, reject) => {
            console.log("@Payload : ", payload)
            setTimeout(() => {
                let newAccount = mockData.myAccounts.find(account => account.id == newId)
                resolve({
                    id: newAccount.id,
                    type: newAccount.type
                })
            }, 1000)
        })
    },

    getAllRequests: (userId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let requests = mockData.requests.find(req => req.id == userId)
                resolve(requests.requests)
            }, 1000)
        })
    },

    acceptRequest: (requestId, userId, doesAccept) => {
        //mock payload
        let payload = {
            userId : userId,
            requestId : requestId,
            doesAccept: doesAccept
        }

        console.log("@Payload: ", payload)

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    status: "ok"
                })
            }, 1000)
        })
    },
}

export default UserApi