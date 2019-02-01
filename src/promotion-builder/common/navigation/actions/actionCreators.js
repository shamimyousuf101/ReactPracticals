
export const SELECTED_VIEW = 'SELECTED_VIEW';

// action creators - returns an action that contains type and a payload

export const selectNavLink = (view) => {
    return {
        type: SELECTED_VIEW,
        payload: view
    }
}