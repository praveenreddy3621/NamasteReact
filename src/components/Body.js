import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import {filterRestaurents} from "../utils/helper"
import useRestaurents from "../hooks/useRestaurents";
import useOnline from "../hooks/useOnline"
import Shimmer from "./Shimmer";

const Body = () => {
  // what is state
  // what is hooks? - Functions
  // what is useState

  // searchText is the local state variable
  const [searchText, setSearchText] = useState(""); // To create State Variables
  //const [restaurents, setRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([])
  const restaurents = useRestaurents();
  const isOnline = useOnline();
  const onSearch = () => {
    const filteresRestaurents = filterRestaurents(searchText, restaurents)
    setFilteredRestaurents(filteresRestaurents);
  };

  useEffect(() => {
    setFilteredRestaurents(restaurents);
  }, [restaurents])
// Shimmer UI
// conditional rendering

  if(!filteredRestaurents) return <h1>No Restaurents match your filter</h1>

  if(!isOnline) {
    return <h1>🔴 Offline, please check your internet connectiton!!</h1>
   }

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
