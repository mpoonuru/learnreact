import React, { Component } from "react";


export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            path: this.props.name
        }
        console.log(this.state.path);
    }
    render(){
        return(
            <h4>{this.props.name}</h4>
        );
    }

}
