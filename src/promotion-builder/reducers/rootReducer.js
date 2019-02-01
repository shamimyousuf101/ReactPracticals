import {combineReducers} from 'redux';

import navLinksReducer from '../common/navigation/reducers/navLinksReducer';
import searchReducer from '../features/search-promotions/sub-components/searchinput/SearchInputReducer';
import searchButtonReducer from '../features/search-promotions/sub-components/searchbutton/SearchButtonReducer'

const rootReducer = combineReducers({
    view: navLinksReducer,
    searchTerm: searchReducer,
    searchDisplay: searchButtonReducer
})

export default rootReducer;