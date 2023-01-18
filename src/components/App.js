import React from "react";
import ReactDOM from "react-dom/client";
import { Form } from "../../ReactHookForms/form";
import {restaurentsList} from "../../constants"
import Header from "./Header"
import BodyComponent from "./Body"
import Footer from "./Footer"
//import {HeaderComponent} from "./Assignment3"

// DOM --> Is the collection of Nodes represented in Tree Structure
// Node -- IS an individual element in the Virtual DOM
// Each node in the Virtual DOM represnets a component
// Tree is the collection of Nodes
// We keep the Representation of actual DOM with us in our code is called Virtual DOM

// Why do we need VDOM -- We need it for Reconciliation of React

// Reconciliation -- Is a alogrith React uses to diff one tree from another
             // Tree is a collection of React Elements

// heading is an object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// Reconciliation in Chapter -4 

const header1Element = React.createElement(
  "h1",
  { id: "header1", hello: "World" },
  "Hello I am h1 tag"
);
// this react element is an Object
console.log(".......Printing header1Element>>>", header1Element);
const header2Element = React.createElement(
  "h2",
  { id: "header" },
  "I am Header 2"
);

const divElement = React.createElement(
  "div",
  { id: "container" },
  header1Element,
  header2Element,
  React.createElement("h3", { id: "header3" }, "I am header3")
);

const heading = React.createElement("div", {}, [
  React.createElement("h1", {}, "Namasthe JavaScript"),
  React.createElement("ul", {}, [
    React.createElement("li", {}, "Home"),
    React.createElement("li", {}, "About Us"),
    React.createElement("li", {}, "Support"),
  ]),
]);

// const reactElement = (
//   <div>
//     <h1> Namasthe JavaScript</h1>
//     <ul>
//       <li>Home</li>
//       <li>About US</li>
//       <li>Support, JSX</li>
//     </ul>
//   </div>
// );

const FunctionalComponent = () => {
  return (
    <div>
      <h1 key="key1"> Namasthe JavaScript</h1>
      {reactElement}
      <ul key="key2">
        <li key="key3">Home</li>
        <li key="key4">About US</li>
        <li key="key5">Support, JSX</li>
      </ul>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element in to render
// const element = <form> <input name="firstName" label='First Name' type="text"> </input> </form>
const element1 = <h1> Hi Hello</h1>;
const x = { onChange: () => {} };
const { onChange } = x;
//root.render(<Form {...onChange}/>);

// const jsxElement = (
//   <>
//     <h1 id="jsx Id" key="heading">
//       {" "}
//       Namsthe React
//     </h1>
//     <h1 id="jsx Id2" key="heading2">
//       {" "}
//       Namsthe React2
//     </h1>
//   </>
// );

// React.createElemtn ==> return a Object
// ReactDom will take that Object convert in to HTML and renders on DOM

// If we write JSX (html like code in javascript)
// Babel will convert in to React.createlement


// Config Driven UI

const AppLayout = () => {
  return (
    /**
   * // Header - 
    //   Logo
    //   Nav Bar (Home, about us)
    //   cart
    // Body --> 
    //   search bar 
    //   Restaurents list
    //    - Image
    //    - Name
    //    - Rating
    //    - Cusines - North Indian
       

    // Footer
    //   reference links
    //   copy rights
   * 
   * 
   */
    <>
      <Header/>
      <BodyComponent></BodyComponent>
      <Footer></Footer>
    </>
  );
};
root.render(<AppLayout />);

/// package.json, package-lock.json ---> git ----> Prod Server (npm install)
