import {combineReducers} from 'redux';

import navLinksReducer from '../common/navigation/links/reducers/navLinksReducer';

const allReducers = combineReducers({
    view: navLinksReducer
})

export default allReducers;