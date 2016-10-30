/**
 * This is reducer of AppName: <%= appName %>
 */
import {combineReducers} from 'redux';
import * as actions from './actions';

function data(state = null, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    data
})
