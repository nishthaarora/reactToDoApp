import { combineReducers } from 'redux';
import todoModel from './todoModelReducer';
import sidebar from './todoSidebarReducer';

export default combineReducers ({
    todoModel,
    sidebar
})