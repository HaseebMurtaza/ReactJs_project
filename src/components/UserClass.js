import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + "Children Constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        login: "null",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "Child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/Hm133");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }
  render() {
    console.log(this.props.name + "Child render ");
    const { name, login } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Login: {login}</h3>
        <h4>Contact: @hmr07</h4>
      </div>
    );
  }
}

export default UserClass;
