import { SEARCH_INPUT_CHANGE } from "./SearchInputAction";


const initailState = {
  searchTerm: "",
};

export default function searchReducer(state = initailState, action) {
  switch (action.type) {
    case SEARCH_INPUT_CHANGE: {
        return action.payload;
    }
    default:
      return state;
  }
}
