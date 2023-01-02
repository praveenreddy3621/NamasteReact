// Why React is fast?
// React uses Bundeler - (Parcel)

// Parcel - 
// Created A Server
// Hot Module Replacement (HMR)
// File Watcher Algoithm - c++
// Bundling
// Minify
// Cleaning our Code
// Dev & Production Build
// Super fast build algorithm
// Image Optimization
// Caching while developemnt
// Compression
// Compatable with older version of browser
// HTTPS on dev
// Port numbers
// Consistent Hasing Algorithm
// Zero Config Bundler
// 


import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {},
    "Hello World I am from React",
    "second reacr element",
    "third react element"
  );
  // heading is an object

   // const root = ReactDOM.createRoot(document.getElementById("root"));

   const header1Element  = React.createElement('h1', {id:'header1', hello: 'World'}, "Hello I am h1 tag")
   // this react element is an Object
   console.log(".......Printing header1Element>>>", header1Element)
   const header2Element = React.createElement('h2', {id:'header'}, 'I am Header 2')

   const divElement = React.createElement('div', {id:'container'}, header1Element, header2Element, React.createElement('h3',{id: 'header3'}, 'I am header3'))

   const root = ReactDOM.createRoot(document.getElementById('root'));
  // passing react element in to render
  root.render(divElement);

 