import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // what is state
  // what is hooks? - Functions
  // what is useState

  // searchText is the local state variable
  const [searchText, setSearchText] = useState(""); // To create State Variables
  const [restaurents, setRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([])

  const onSearch = () => {
    const restuarents = restaurents.filter((restaurent) => {
      return restaurent.data?.name?.toLowerCase().includes(searchText.toLocaleLowerCase());
    });
    setFilteredRestaurents(restuarents);
  };

  // Hook is a function 
  useEffect(() => {
    getRestaurents();
  }, []);

  const getRestaurents = async() => {
    const url = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6818877&lng=77.6005911&page_type=DESKTOP_WEB_LISTING'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      mode: 'no-cors',
    };

    const data = await fetch(url)
    const json = await data.json();
    setRestaurents(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurents(json?.data?.cards[2]?.data?.data?.cards)
  }

// Shimmer UI
// conditional rendering

  if(!filteredRestaurents) return <h1>No Restaurents match your filter</h1>

  return ( restaurents.length === 0 ? <Shimmer/> : 
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-button" onClick={onSearch}>
          Search
        </button>
      </div>
      <div key="body-key" className="body">
        {/* <input type="text" /> */}
        {filteredRestaurents && filteredRestaurents.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.data.id} {...restaurent.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
