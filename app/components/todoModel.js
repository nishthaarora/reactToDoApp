import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Router from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {todoItem} from '../redux-duckFormat/todoModelReducer';
import axios from 'axios';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

@connect((store) => {
    return {
        item: store.todoModel.item
    }
})
export default class ToDoModel extends React.Component {
    constructor(context,props) {
        super(context, props);        
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/create', 
        {newItem: this.props.item.enterTodo, status: 'active'})
        .then((res)=>{
            if(res) {
            }
        }).catch ((err) => {
            console.log(err);
        })
    }

    handleChange(event) {
        this.props.dispatch(todoItem({[event.target.name]: event.target.value}));
    }

    render() {
        return (
        <div>
           <MuiThemeProvider>
                <div> 
                    <form className="enterTodo" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="todoArea">
                        <TextField className="inputField"
                            name="enterTodo"
                            hintText="Hint Text"
                            floatingLabelText="enter your todo"
                            floatingLabelFixed={true}
                            onChange={this.handleChange.bind(this)}
                        />
                        <button>Submit</button>
                        </div>
                    </form>
                </div>
            </MuiThemeProvider>
        </div>
        )
    }
}