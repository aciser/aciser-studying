import React, {Component} from "react";

class Count extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <p>{this.props.number1}</p>
        ) 
    }
}

export default Count