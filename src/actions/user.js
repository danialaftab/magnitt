import UserApi from '../apis/user'

export const GET_USER = Symbol("GET_USER")
export const GET_USER_SUCCESS = Symbol("GET_USER_SUCCESS")

export function getUser(id) {
    return dispatch => {
        dispatch({
            type: GET_USER
        });
        
        return UserApi.getUser(id).then(res => {
            dispatch(onGetUser({}, res));
        });
    };
}

function onGetUser(bodyPayload, payload) {
    return {
        type: GET_USER_SUCCESS,
        bodyPayload,
        payload
    };
}
