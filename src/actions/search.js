import SearchApi from '../apis/search'

export const SAERCH_ALL = Symbol("SAERCH_ALL")
export const SEARCH_SUCCESS = Symbol("SEARCH_SUCCESS")

export function searchAll(searchQry) {
    return dispatch => {
        dispatch({
            type: SAERCH_ALL
        });
        
        return SearchApi.searchAll(searchQry).then(res => {
            dispatch(onSearchResults({}, res));
        });
    };
}

function onSearchResults(bodyPayload, payload) {
    return {
        type: SEARCH_SUCCESS,
        bodyPayload,
        payload
    };
}