import {combineReducers} from 'redux';

import navLinksReducer from '../common/navigation/reducers/navLinksReducer';
import searchReducer from '../features/search-promotions/reducers/searchReducer';

const rootReducer = combineReducers({
    view: navLinksReducer,
    searchTerm: searchReducer
})

export default rootReducer;