import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../../constants";

const useRestaurent =  (restaurentId) => {
  // suppose if the restaurentId changes, response should also change
  const [restaurent, setRestaurent] = useState(null);

  useEffect(() => {
    getRestaurentInfo();
  }, []);
  
  const getRestaurentInfo = async () => {
    const data = await fetch(FETCH_MENU_URL + restaurentId);
    const response = await data.json();

    setRestaurent(response?.data);
  };

  return restaurent;
};

export default useRestaurent;

