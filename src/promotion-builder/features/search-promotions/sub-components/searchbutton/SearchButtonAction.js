export const SEARCH_BUTTON_CLICK = "SEARCH_BUTTON_CLICK";


export const searchPromotions = (searchTerm, searchDisplay) => {
    return {
        type: SEARCH_BUTTON_CLICK,
        payload: {searchTerm, searchDisplay}
    }
}
