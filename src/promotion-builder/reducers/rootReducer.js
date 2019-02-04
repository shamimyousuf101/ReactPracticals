import {combineReducers} from 'redux';

import viewReducer from '../common/navigation/reducers/view_reducer';
import searchTermReducer from '../features/search-promotions/reducers/search_term_reducer';
import searchPromotionsReducer from '../features/search-promotions/reducers/search_promotions_reducer'

const rootReducer = combineReducers({
    view: viewReducer,
    searchTerm: searchTermReducer,
    searchDisplay: searchPromotionsReducer
})

export default rootReducer;