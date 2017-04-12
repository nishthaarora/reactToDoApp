import React from 'react';
import axios from 'axios';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { itemsList } from '../redux-duckFormat/todoMainReducer';
 
 @connect((store)=> {
     return {}
 })
export default class ToDoRightNav extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange(e, selected){
        let self = this;
        let value = e.target.value.toLowerCase();
        var filteredItems = []
        console.log(value);
        axios.get('/api/get').then((response) => {
            if(value === "all") {
                self.props.dispatch(itemsList(response.data.data))
            } else {
                response.data.data.map((items, i) => {
                    if(items.status === value) {
                        filteredItems.push(items)
                    }
                })
                self.props.dispatch(itemsList(filteredItems))
            }
        })
    }    

    render() {
        const styles = {
            block: {
                maxWidth: 250,
            },
            radioButton: {
                marginBottom: 16,
            },
         };

        return (
            <MuiThemeProvider>              
                    <div className="rightNav">
                        <h1>Filter List</h1>
                        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light"
                            onChange={this.handleChange.bind(this)}
                                        >
                            <RadioButton
                                ref={(c) => this.radio = c}
                                value="All"
                                label="All"
                                style={styles.radioButton}
                            />
                            <RadioButton
                                value="Active"
                                label="Active"
                                style={styles.radioButton}
                            />
                            <RadioButton
                                value="Completed"
                                label="Completed"
                                style={styles.radioButton}
                            />
                        </RadioButtonGroup>                                
                    </div>
            </MuiThemeProvider>
        )
    }

}
