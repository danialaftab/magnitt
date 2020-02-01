import UserApi from '../apis/user'

export const GET_CART = Symbol("GET_CART");
export const GET_CART_SUCCESS = Symbol("GET_CART_SUCCESS");

export function getUser() {
    return dispatch => {
        dispatch({
            type: GET_CART
        });
        
        return UserApi.getUser().then(res => {
            dispatch(onGetUser({}, res));
        });
    };
}

function onGetUser(bodyPayload, payload) {
    return {
        type: GET_CART_SUCCESS,
        bodyPayload,
        payload
    };
}
