import React from "react";

class MakeRestCall extends React.Component {
  constructor() {
    super();
    this.state = {
      xyz: "hi"
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/getWelcomeMsg")
      .then(res => res.text())
      .then(data => {
        this.setState({ response: data });
      })
      .catch(console.log);
  }
  render() {
    return (
      <div>
        {" "}
        <input type="test" value={this.state.response}></input>
      </div>
    );
  }
}

export default MakeRestCall;
