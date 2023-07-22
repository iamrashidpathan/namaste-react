// import User from "./User";
import UserClass from "./UserClass";

import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div className="m-4 text-center">
        <h1 className="text-lg">Foodish</h1>
        <h2 className="text-xs mb-2">Eat, Burp, Repeat</h2>
         <UserClass name={"First"} location={"Dehradun Class"} role={"Founder & CEO"}/>
      </div>
    );
  }
}

export default About;