export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE';

export const handleInputChange = (searchTerm) => {
    return {
        type: HANDLE_INPUT_CHANGE,
        payload: searchTerm
    }
}