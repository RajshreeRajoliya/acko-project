import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import AuthReducer from './AuthReducer/AuthReducer';
import DataReducer from './DataReducer/DataReducer';
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({
    data: DataReducer,
    auth: AuthReducer
})

const store = legacy_createStore(combinedReducer, applyMiddleware(thunk));

export default store;