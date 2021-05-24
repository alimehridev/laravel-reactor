import React from "react";
import "../../css/Home.scss";

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }
    render(){
        return (
            <>
                <div className="left">Left</div>   
                <div className="right">Right</div>   
            </>
        )
    }
}

export default Home;