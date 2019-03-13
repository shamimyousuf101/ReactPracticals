/*
 * action types
 */

export const UPDATE_VIEW = "UPDATE_VIEW";
export const RESET_SELECTED_PROMO_ID = "RESET_SELECTED_PROMO_ID";
export const SET_SELECTED_PROMO_ID = "SET_SELECTED_PROMO_ID"; //  not used

/*
 * action creators
 */

export const updateView = newView => {
  return {
    type: UPDATE_VIEW,
    payload: newView
  };
};

export const resetPrommotionId = () => {
  return {
    type: RESET_SELECTED_PROMO_ID,
    payload: ""
  };
};
