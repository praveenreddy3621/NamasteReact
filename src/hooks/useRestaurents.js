import { useEffect, useState } from "react";

const useRestaurents = () => {
  const [restaurents, setRestaurents] = useState([]);

  const getRestaurents = async () => {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6818877&lng=77.6005911&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(url);
    const json = await data.json();

    setRestaurents(json?.data?.cards[0]?.data?.data?.cards);
  };

  useEffect(() => {
    getRestaurents();
  }, []);

  return restaurents;
};

export default useRestaurents;
