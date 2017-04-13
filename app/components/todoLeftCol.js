import React from 'react';
import { connect } from 'react-redux';
 import { itemsList, fetchPosts } from '../redux-duckFormat/todoMainReducer';

 @connect((store)=> {
     return {
         list: store.itemsList.list,
     }
 })
export default class ToDoLeftCol extends React.Component{
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.dispatch(fetchPosts(this.props.list));
    // }

    // componentDidUpdate() {
    //     console.log('updated');
    // }
    
    render() {
        console.log('list', this.props.list);
        var listItem;
        if(this.props.list) {
            listItem = this.props.list
        }
        return(
            <div className="leftCol"> 
                <h1>todo List</h1>
                <ul>
                    { listItem ? 
                        listItem.map((items, i) => <li style={{listStyle:'none'}} key={i}>
                            <input type="checkbox" value={items.description} />
                            {items.description}
                            </li>)
                    :
                       null
                            
                    }                  
                </ul>  
            </div>
        )
    }
}