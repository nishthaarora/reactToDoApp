import React from 'react';
import axios from 'axios';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class ToDoRightNav extends React.Component {
    constructor(props) {
        super(props)
    }

    select = (index) => this.setState({selectedIndex: index});

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
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                    <RadioButton
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
