
/*
* action types
*/

export const CHANGE_VIEW = 'CHANGE_VIEW';

/*
* action creators
*/

export const changeView = (view) => {
    return {
        type: CHANGE_VIEW,
        payload: view
    }
}