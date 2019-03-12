/*
 * action types
 */

export const ADD_SUBHEADING = "ADD_SUBHEADING";

/*
 * action creators
 */

export const addSubheading = text => {
  return {
    type: ADD_SUBHEADING,
    payload: text
  };
};
