import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Router from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {todoItem} from '../redux-duckFormat/todoModelReducer';
import { fetchPosts } from '../redux-duckFormat/todoMainReducer';
import axios from 'axios';
var itemArr;

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

@connect((store) => {
    return {
        item: store.todoModel.item,
        list: store.itemsList.list,
    }
})
export default class ToDoModel extends React.Component {
    constructor(context,props) {
        super(context, props);        
    }

     componentDidMount() {
        this.props.dispatch(fetchPosts(this.props.list));
    }

    handleSubmit(event) {
        var self = this;
        event.preventDefault();
        axios.post('/api/create', 
        {newItem: this.props.item.description, status: this.props.item.status})
        .then((res)=>{
            if(res) {         
                itemArr = this.props.list;
                itemArr.push(res.data.newItem);
                self.props.dispatch(fetchPosts(itemArr));
            }
        }).catch ((err) => {
            console.log(err);
        })
    }

    handleChange(event) {
        this.props.dispatch(todoItem({[event.target.name]: event.target.value, status: 'active'}));
        
    }

    render() {
        return (
        <div>
           <MuiThemeProvider>
                    <form className="enterTodo" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="todoArea">
                        <TextField className="inputField"
                            name="description"
                            hintText="Hint Text"
                            floatingLabelText="enter your todo"
                            floatingLabelFixed={true}
                            onChange={this.handleChange.bind(this)}
                        />
                        <button>Submit</button>
                        </div>
                    </form>
            </MuiThemeProvider>
        </div>
        )
    }
}