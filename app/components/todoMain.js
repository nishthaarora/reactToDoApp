import React from 'react';
import ToDoModel from './todoModel';
import ToDoLeftCol from './todoLeftCol';
import ToDoSidebar from './todoSidebar';
import ToDoRightNav from './todoRightNav';
import axios from 'axios';

export default class ToDoMain extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            resArr: ''
        }
    }

    componentDidMount() {
        var self = this;
        axios.get('/api/get').then( (response) => {
            self.setState({resArr:response.data.data})
        })
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
                            <ToDoLeftCol list={this.state.resArr} />
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