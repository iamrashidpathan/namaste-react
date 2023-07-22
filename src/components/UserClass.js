import { Component } from "react";

class UserClass extends Component{

    constructor(props){
        super(props)
        this.state={
            userInfo:null
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/iamrashidpathan");
        const json = await data.json();

        this.setState({
        userInfo: json,
        });

    }

    render(){
        let {userInfo} = this.state
        return(
            <div>
                <>{this.props.role}</>
                <img className="m-auto" src={userInfo?.avatar_url}/>
                <h3>{userInfo?.name}</h3>
                <h4>{userInfo?.bio}</h4>
            </div>    
        )
    }
}

export default UserClass