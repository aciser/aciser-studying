import React,{Component} from "react";

export default class Stop extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <>
                <button onClick={this.props.StopApp}>Stop</button>
            </> 
        )
    }
}