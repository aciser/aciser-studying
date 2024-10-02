import React from "react";

interface IProps    {
    name?: string
}
const Header:React.FC<IProps> = (props: IProps)=>{
    return <h1>Hello,{props.name}! Welcome clmm.</h1>
};
Header.defaultProps = {
    name: 'World',
}

export default Header