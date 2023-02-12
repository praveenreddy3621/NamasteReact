import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor")
  }

  async componentDidMount () {
    // console.log("Parent - before componentDidMount")
    // // Best place to make API call
    // const data = await fetch("https://api.github.com/users/praveenreddy3621")
    // const json = await data.json();
    // console.log("Josn in parent>>>>>",json)
    console.log("Parent - componentDidMount")
  }

  render() {
    console.log("Parent - render")
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is Namasthe React chapter 7</p>
        <ProfileClassComponent name={"First Child"} />
        {/* <ProfileClassComponent name={"Second Child"} /> */}
        {/* <ProfileFunctionalComponent/> */}
      </div>
    );
  }
}

export default About;

/*

Parent Constrcutor
Praent render 
  Child1 Constrcutor
  Child1 render
  Child1 DidMount

  Child2 Constructor
  Child2 render
  Child2 Didmount

Parent ComponentDid Mount


  Child1 Render
  Child 1 componentDidUpdate

  Child2 Render
  Child2 componentDidUpdate

Parent ComponentDidUpdate

*/

/*
                Mounting,                 Updating ,                Unmounting


Render Phase   constructor             render                      Component WillUnmount
               render 

 Commit Phase  Component Did Mount     Component Did Update

*/

/*

Parent Constructor
Parent Render
  Child1 Construct
  Child1 render
  Child 1 Component Did Mount
  Child2 Construct
  Child2 render

Parent Component Did Mount

 Child1 


*/

/*

useEffect(() => {}), this will be called every time when the render the called
useEffect(() => {}, []) ===> this will be called only once after first render
useEffect(() => {}, [count]) ===> when the everyt time the counter changes this is called


*/