const heading = React.createElement(
    "h1",
    {},
    "Hello World I am from React",
    "second reacr element",
    "third react element"
  );
  // heading is an object

   // const root = ReactDOM.createRoot(document.getElementById("root"));

   const header1Element  = React.createElement('h1', {id:'title'}, "Hello I am h1 tag")
   // this react element is an Object
   console.log(".......Printing header1Element>>>", header1Element)
   const header2Element = React.createElement('h2', {id:'title'}, "Hello I am h2 tag")

   const divElement = React.createElement('div', {id:'container'}, header1Element, header2Element, React.createElement('h3',{id: 'header3'}, 'I am header3'))

   const root = ReactDOM.createRoot(document.getElementById('root'));
  // passing react element in to render
  root.render(divElement);