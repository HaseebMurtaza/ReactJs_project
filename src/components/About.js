import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount");
    
  }
  render() {
    //console.log("Parent render ");
    return (
      <div className="About">
        <h1>About</h1>
        <h2>Welcome👋 to our food App </h2>
        <UserClass name={"First (Class Component)"} location={"Multan"} />
      </div>
    );
  }
}

export default About;
