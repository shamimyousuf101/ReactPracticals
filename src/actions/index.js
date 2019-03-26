/*
 * action types
 */

export const UPDATE_VIEW = "UPDATE_VIEW";

export const RESET_SELECTED_PROMO_ID = "RESET_SELECTED_PROMO_ID";
export const SET_SELECTED_PROMO_ID = "SET_SELECTED_PROMO_ID";

export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const TRIGGER_SEARCH = "TRIGGER_SEARCH";

export const ADD_PROMOTION = "ADD_PROMOTION";


/*
 * action creators for changing view
 */

export const updateView = newView => {
  return {
    type: UPDATE_VIEW,
    payload: newView
  };
};

/*
 * action creators for setting and resetting promotion id
 */

export const setPrommotionId = id => {
  return {
    type: SET_SELECTED_PROMO_ID,
    payload: id
  };
};

export const resetPrommotionId = () => {
  return {
    type: RESET_SELECTED_PROMO_ID,
    payload: ""
  };
};

/*
 * action creators for dealing with searchTerm
 */

export const setSearchTerm = term => {
  return {
    type: SET_SEARCH_TERM,
    payload: term
  };
};

export const triggerSearch = event => {
  return {
    type: SET_SEARCH_TERM,
    payload: event.target.value
  };
};

/*
 * action creators for adding promotion
 */

export const addPromotion = ( id, promotion ) => {
  return {
    type: ADD_PROMOTION,
    payload: {id, promotion}
  };
};
