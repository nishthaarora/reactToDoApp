import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { browserHistory } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { sidebarToggle } from '../redux-duckFormat/todoSidebarReducer';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        open: store.sidebar.open
    }
})
export default class ToDoSidebar extends React.Component {
    constructor(props) {
    super(props);
  }
    
 handleToggle = () => this.props.dispatch(sidebarToggle())

 handleClick(event) {
     var path = event.currentTarget.textContent;
     path = path.split(' ').join('').toLowerCase();
     if(path === 'home') {
        browserHistory.push('/');    
     } else {
        browserHistory.push(path);
     }
     
 }

 render() {
        return(
            <MuiThemeProvider>
                <div>
                    <Drawer style={{position:'relative'}} className="sideBar" 
                    open={this.props.open}
                    docked={false}>
                        <MenuItem>
                            <button className="glyphicon glyphicon-menu-hamburger"
                                onClick={this.handleToggle.bind(this)}
                                style={{position:'absolute', right:0, top:0, padding: 15, "borderRadius":5, clear:'both' }}>   
                            </button>
                        </MenuItem>
                        <MenuItem onTouchTap={this.handleToggle.bind(this)} onClick={this.handleClick.bind(this)}>Home</MenuItem>
                        <MenuItem onTouchTap={this.handleToggle.bind(this)} onClick={this.handleClick.bind(this)}>About</MenuItem>
                        <MenuItem onTouchTap={this.handleToggle.bind(this)} onClick={this.handleClick.bind(this)}>Fun Stuff</MenuItem>
                         
                    </Drawer>                        
                    <button className="glyphicon glyphicon-menu-hamburger hanburger"
                        style={{position:'absolute', left:0, top:0, padding: 15, "borderRadius":5, clear:'both' }}
                        onClick={this.handleToggle.bind(this)}>   
                    </button>
                </div>
            </MuiThemeProvider> 
        )
    }
}

