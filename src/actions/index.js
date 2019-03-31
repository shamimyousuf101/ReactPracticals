/*
 * action types
 */

export const UPDATE_VIEW = "UPDATE_VIEW";

export const RESET_SELECTED_PROMO_ID = "RESET_SELECTED_PROMO_ID";
export const SET_SELECTED_PROMO_ID = "SET_SELECTED_PROMO_ID";

export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const TRIGGER_SEARCH = "TRIGGER_SEARCH";

export const ADD_PROMOTION = "ADD_PROMOTION";

export const SHOW_OVERLAY = "SHOW_OVERLAY";


/*
 * action creators for changing view
 */

export const updateView = newView => ({
  type: UPDATE_VIEW,
  payload: newView
});

/*
 * action creators for setting and resetting promotion id
 */

export const setPrommotionId = id => ({
  type: SET_SELECTED_PROMO_ID,
  payload: id
});

export const resetPrommotionId = () => ({
  type: RESET_SELECTED_PROMO_ID,
  payload: null
});

/*
 * action creators for dealing with searchTerm
 */

export const setSearchTerm = term => ({
  type: SET_SEARCH_TERM,
  payload: term
});

export const triggerSearch = event => ({
  type: SET_SEARCH_TERM,
  payload: event.target.value
});

/*
 * action creators for adding promotion
 */

export const addPromotion = ( id, promotion ) => ({
  type: ADD_PROMOTION,
  payload: {id, promotion}
});

/*
 * action creators for showing overlay
 */

export const showOverlay = (show) => ({
  type: SHOW_OVERLAY,
  payload: show
})