import UserApi from '../apis/user'

export const GET_USER = Symbol("GET_USER")
export const GET_USER_SUCCESS = Symbol("GET_USER_SUCCESS")

export const GET_CONNECTIONS = Symbol("GET_CONNECTIONS")
export const GET_CONNECTIONS_SUCCESS = Symbol("GET_CONNECTIONS_SUCCESS")

export const GET_ACCOUNTS = Symbol("GET_ACCOUNTS")
export const GET_ACCOUNTS_SUCCESS = Symbol("GET_ACCOUNTS_SUCCESS")

export const SET_ACTIVE_ACCOUNT = Symbol("SET_ACTIVE_ACCOUNT")
export const SET_ACTIVE_ACCOUNTS_SUCCESS = Symbol("SET_ACTIVE_ACCOUNTS_SUCCESS")

export const ADD_CONNECTION = Symbol("ADD_CONNECTION")
export const ADD_CONNECTION_SUCCESS = Symbol("ADD_CONNECTION_SUCCESS")

export const GET_REQUESTS = Symbol("GET_REQUESTS")
export const GET_REQUESTS_SUCCESS = Symbol("GET_REQUESTS_SUCCESS")

export const ACCEPT_REQUEST = Symbol("ACCEPT_REQUEST")
export const ACCEPT_REQUEST_SUCCESS = Symbol("ACCEPT_REQUEST_SUCCESS")

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

export function getMyConnections(id) {
   
    return dispatch => {
        dispatch({
            type: GET_CONNECTIONS
        });
        
        return UserApi.getConnections(id).then(res => {
            dispatch(onGetConnections({}, res));
        });
    };
}

function onGetConnections(bodyPayload, payload) {
    return {
        type: GET_CONNECTIONS_SUCCESS,
        bodyPayload,
        payload
    };
}

export function getMyAccounts(userId) {
    return dispatch => {
        dispatch({
            type: GET_ACCOUNTS
        });
        
        return UserApi.getAllAcounts(userId).then(res => {
            dispatch(onGetAccounts({}, res));
        });
    };
}

function onGetAccounts(bodyPayload, payload) {
    return {
        type: GET_ACCOUNTS_SUCCESS,
        bodyPayload,
        payload
    };
}

export function setActiveAccount(originalId, newId, newType) {
    return dispatch => {
        dispatch({
            type: SET_ACTIVE_ACCOUNT
        });
        
        return UserApi.setActiveAccount(originalId, newId, newType).then(res => {
            dispatch(onSetActiveAccount({}, res));
        });
    };
}

function onSetActiveAccount(bodyPayload, payload) {
    return {
        type: SET_ACTIVE_ACCOUNTS_SUCCESS,
        bodyPayload,
        payload
    };
}

export function addConnection(originalId, idToAdd) {
    return dispatch => {
        dispatch({
            type: ADD_CONNECTION
        });
        
        return UserApi.addToConnections(originalId, idToAdd).then(res => {
            dispatch(onAddConnection({}, res));
        });
    };
}

function onAddConnection(bodyPayload, payload) {
    return {
        type: ADD_CONNECTION_SUCCESS,
        bodyPayload,
        payload
    };
}

export function getAllRequests(userId) {
    return dispatch => {
        dispatch({
            type: GET_REQUESTS
        });
        
        return UserApi.getAllRequests(userId).then(res => {
            dispatch(ongetAllRequests({}, res));
        });
    };
}

function ongetAllRequests(bodyPayload, payload) {
    return {
        type: GET_REQUESTS_SUCCESS,
        bodyPayload,
        payload
    };
}

export function acceptRequest(requestId, userId, doesAccept) {
    return dispatch => {
        dispatch({
            type: ACCEPT_REQUEST
        });
        
        return UserApi.acceptRequest(requestId, userId, doesAccept).then(res => {
            dispatch(onAccept({}, res));
        });
    };
}

function onAccept(bodyPayload, payload) {
    return {
        type: ACCEPT_REQUEST_SUCCESS,
        bodyPayload,
        payload
    };
}



