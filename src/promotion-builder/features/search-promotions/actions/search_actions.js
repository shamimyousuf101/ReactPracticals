
/*
* action types
*/

export const SEARCH_PROMOTIONS = "SEARCH_PROMOTIONS";
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

/*
* action creators
*/
export const searchPromotions = () => {
    return {
        type: SEARCH_PROMOTIONS
    }
}

export const setSearchTerm = (searchTerm) => {
    return {
        type: SET_SEARCH_TERM,
        payload: searchTerm
    }
}