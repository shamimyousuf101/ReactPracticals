import {combineReducers} from 'redux';

import navLinksReducer from '../common/navigation/reducers/navLinksReducer';

const rootReducer = combineReducers({
    view: navLinksReducer
})

export default rootReducer;