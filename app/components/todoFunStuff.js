import React from 'react';
import ToDoSidebar from './todoSidebar';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux-duckFormat/todoMainReducer';
import axios from 'axios';

@connect((store)=> {
    return {
        list: store.itemsList.list,
    }
})
export default class ToDoFunStuff extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: ''
        }
    }

    componentDidMount() {
        this.props.dispatch( fetchPosts( this.props.list ));
    }

    handleClick(event) {
        let self = this;
        let phrase = event.target.value
        let newArr = [];
        axios.get('https://api.giphy.com/v1/gifs/search?q=' + phrase + '&api_key=dc6zaTOxFJmzC')
        .then((response) => {
            response.data.data.map((giphy,i) => {
                newArr.push(giphy.images.fixed_height.url)
                self.setState({image: newArr});
            })
        })
    }

    render() {
        let listItem;
        if(this.props.list) {
           listItem = this.props.list
        }
        return(
            <div>  
                <p style={{textAlign:'center'}}>
                    This section created buttons for all todoItems which are active 
                    gets relevant images from giphy API
                </p> 
                <ToDoSidebar />
                <div>
                    { listItem?
                        listItem.map((item,i) => {
                            if(item.status === 'active') {
                                return <button style={{marginLeft: 100, marginTop: 100}} 
                                    className="todoBtn" key={i} onClick={this.handleClick.bind(this)}
                                    value={item.description}
                                    >
                                    {item.description}</button>
                            } 
                        }) 
                        :
                        null
                    }               
                </div>
                <div>
                    { this.state.image ? 
                        this.state.image.map((images) => <img style={{marginTop: 20}} className="col-md-3" src={images} alt=""/> )
                    :
                    null
                    }
                </div>
            </div>
        )
    }
}