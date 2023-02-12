import { useEffect, useState } from "react";

const ProfileClassComponent = (props) => {
  const [count, setCount] = useState(0);
   
  useEffect(() => {
    //API Call
    console.log("In useEffect")
    const timer = setInterval(() => {
        console.log("I am in profile functional component timer")
    }, 2000)
    
    return () => {
        console.log("I am in useEffect return")
        clearInterval(timer)
    }
  })

  console.log("render")
  return (
    <div>
      <h1>Profile Component </h1>
      <h2>Name: {props.name}</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(1)}>Count</button>
    </div>
  );
};

export default ProfileClassComponent;
