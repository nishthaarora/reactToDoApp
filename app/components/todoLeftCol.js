import React from 'react';
import { connect } from 'react-redux';
 
 @connect((store)=> {
     return {
         list: store.itemsList.list
     }
 })
export default class ToDoLeftCol extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        var listItem;
        if(this.props.list) {
            listItem = this.props.list
        }
        console.log(listItem);
        return(
            <div className="leftCol"> 
                <h1>todo List</h1>
                <ul>
                    {listItem ? 
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