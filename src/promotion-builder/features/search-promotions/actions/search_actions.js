
/*
* action types
*/

export const SEARCH_PROMOTIONS = "SEARCH_PROMOTIONS";
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

/*
* action creators
*/
export const searchPromotions = (searchTerm) => {
    return {
        type: SEARCH_PROMOTIONS,
        payload: searchTerm
    }
}

export const setSearchTerm = (searchTerm) => {
    return {
        type: SET_SEARCH_TERM,
        payload: searchTerm
    }
}