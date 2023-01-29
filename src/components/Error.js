import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(".....>>>>>.error", error)
  return (
    <div>
      <h1>OOPS!</h1>
      <h2>Something Went wrong!</h2>
      <h3>{error?.data}</h3>
    </div>
  );
};

export default Error;
