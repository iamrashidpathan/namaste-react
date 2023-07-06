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
      <div>
        <h1>Foodish</h1>
        <h2>Eat, Burp, Repeat</h2>
        <UserClass name={"First"} location={"Dehradun Class"} role={"Developer"}/>
      </div>
    );
  }
}

export default About;