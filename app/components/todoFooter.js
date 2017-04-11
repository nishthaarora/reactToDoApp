import React from 'react';
import axios from 'axios';
var list = [];

export default class ToDoFooter extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var self = this;
        axios.get('/api/get').then( (response) => {
            var resArr = response.data.data
            resArr.map((item, i) => {
                list.push(
                    <li key={i}>
                        {item.description}
                    </li>
                )
            })
        }).catch((err) => {
            console.log(err);
        })
        return list;
    }
    
    render() {
        return(
            <footer className="todoFooter"> 
                <ul>
                    {list}
                    {/*{list.map((items, i) => items.props.children)}*/}
                </ul>  
            </footer>
        )
    }
}