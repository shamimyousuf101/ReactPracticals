export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';

export const handleInputChange = (searchTerm) => {
    return {
        type: SEARCH_INPUT_CHANGE,
        payload: searchTerm
    }
}