import React from "react";

interface IProps{
    likeBy?: number
}
interface IState{
    like: number
}

class CatDescription extends React.Component<IProps,IState>{
    public static defaultProps: Partial<IProps> = {
        likeBy: 1,
    };
    public state: Readonly<IState> = {
        like:0
    };
    public increase = () =>{
        const likeBy:number = this.props.likeBy!
        const like = this.state.like + likeBy
        this.setState({like})
    }
    public render(): React.ReactNode {
        return(
            <div>
                <p>Hello...it's me</p>
                <img src="https://i.imgur.com/igdestH.gif" alt="cat-image" />
                <button onClick={this.increase}>Likes: {this.state.like}</button>
            </div>
        );
    }
}

export default CatDescription