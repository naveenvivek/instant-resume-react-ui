import React from "react";
import styles from "./style.css";
import MakeRestCall from "./MakeRestCall";

class DragDrop extends React.Component {
  constructor() {
    super();
    this.state = {
      xyz: "hi"
    };
  }
  callSearchService() {
    fetch("http://localhost:8080/getWelcomeMsg")
      .then(res => res.text())
      .then(data => {
        document.getElementById("restResponse").value = data;
      })
      .catch(console.log);
  }
  render() {
    return (
      <div>
        Keywords <br /> <br />
        <textarea
          className="textAreaStyle"
          rows="4"
          cols="50"
          value="Java, MicroServices"
        ></textarea>
        <br /> <br />
        <input type="submit" name="Search" onClick={this.callSearchService} />
        <br /> <br />
        <textarea
          className="textAreaStyle"
          rows="20"
          cols="50"
          id="restResponse"
          value=""
        ></textarea>
      </div>
    );
  }
}

export default DragDrop;
