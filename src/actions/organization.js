import OrganizationApi from '../apis/organization'

export const GET_ORGANIZATION = Symbol("GET_ORGANIZATION")
export const GET_ORGANIZATION_SUCCESS = Symbol("GET_ORGANIZATION_SUCCESS")

export function getOrganization(id) {
    return dispatch => {
        dispatch({
            type: GET_ORGANIZATION
        });
    
        return OrganizationApi.getOrganization(id).then(res => {
            dispatch(onGetOrganization({}, res));
        });
    };
}

function onGetOrganization(bodyPayload, payload) {
    return {
        type: GET_ORGANIZATION_SUCCESS,
        bodyPayload,
        payload
    };
}
