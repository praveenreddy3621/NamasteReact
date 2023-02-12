import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleClick = () => {
    setIsLogged(!isLogged);
  };

  return {
    handleClick,
    isLogged,
  };
};

export default useAuth;
