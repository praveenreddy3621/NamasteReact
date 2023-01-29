import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    console.log("Parent - constructor")
  }

  componentDidMount() {
    // Best place to make API call
    console.log("Parent - componentDidMount")
  }

  render() {
    console.log("Parent - render")
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is Namasthe React chapter 7</p>
        <Profile name={"First Child"} />
        <Profile name={"Second Child"} />
      </div>
    );
  }
}

export default About;