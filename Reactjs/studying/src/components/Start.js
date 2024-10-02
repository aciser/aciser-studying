import React,{Component} from "react";

export default class Start extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <>
                <button onClick={this.props.StartApp}>Start</button>
            </> 
        )
    }
}