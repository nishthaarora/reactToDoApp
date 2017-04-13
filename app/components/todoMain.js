import React from 'react';
import ToDoModel from './todoModel';
import ToDoLeftCol from './todoLeftCol';
import ToDoSidebar from './todoSidebar';
import ToDoRightNav from './todoRightNav';
import { itemsList, fetchPosts } from '../redux-duckFormat/todoMainReducer';
import axios from 'axios';
import { connect } from 'react-redux';

 
 @connect((store)=> {
     return {
         list: store.itemsList.list,
     }
 })
export default class ToDoMain extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let self = this;
        this.props.dispatch(fetchPosts(this.props.list));
    }

    render() {
        return(
            <div> 
                <ToDoSidebar />
                <div className="container">
                    <h1 className="heading">todos</h1>  
                    <div className="row">
                        <div className="col-md-12">
                            <ToDoModel />
                        </div>
                    </div>
                    <div className="row sideNav">
                        <div className="col-md-6">
                            <ToDoLeftCol />
                        </div>
                        <div className="col-md-6">
                            <ToDoRightNav />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}