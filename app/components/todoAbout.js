import React from 'react';
import ToDoSidebar from './todoSidebar';

export default class ToDoAbout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div> 
                <ToDoSidebar />
                <div className="container">
                    <div className="row">  
                        <img style={{width: 30+'%', margin: 10}} className="col-md-3" src="/static/images/about-img.jpg" alt="profile pic" />
                        <p className="col-md-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Repellendus deleniti minima rem, molestiae, eius, sunt 
                            dicta molestias sint libero quis magni dolores eaque amet 
                            ea, quia veniam quaerat. Iusto, consequatur.
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Repellendus deleniti minima rem, molestiae, eius, sunt 
                            dicta molestias sint libero quis magni dolores eaque amet 
                            ea, quia veniam quaerat. Iusto, consequatur.
                            
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Repellendus deleniti minima rem, molestiae, eius, sunt 
                            dicta molestias sint libero quis magni dolores eaque amet 
                            ea, quia veniam quaerat. Iusto, consequatur.
                            </p>
                    </div>
                </div>
            </div>
        )
    }
}