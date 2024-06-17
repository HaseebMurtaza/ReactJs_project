import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount");
  }

  const;
  render() {
    //console.log("Parent render ");
    return (
      <div className="m-4 p-4">
        <h1 className="font-bold text-2xl">About Us</h1>

        <h2 className="font-bold text-lg py-4">Welcome👋 to our food App </h2>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
          </UserContext.Consumer>
        </div>
        <div className="bg-slate-200 p-4 text-base">
          <UserClass name={"First (Class Component)"} location={"Multan"} />
        </div>
      </div>
    );
  }
}

export default About;
