import { combineReducers } from 'redux';
import todoModel from './todoModelReducer';
import sidebar from './todoSidebarReducer';
import itemsList from './todoMainReducer';


export default combineReducers ({
    todoModel,
    sidebar,
    itemsList,
    
})