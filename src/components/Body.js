import { restaurentsList } from "../../constants";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";

const Body = () => {
  // what is state
  // what is hooks? - Functions
  // what is useState

  // searchText is the local state variable
  const [searchText, setSearchText] = useState(""); // To create State Variables
  const [restaurents, setRestaurents] = useState(restaurentsList);

  const onSearch = () => {
    const restuarents = restaurentsList.filter((restaurent) => {
      return restaurent.data.name.includes(searchText);
    });
    setRestaurents(restuarents);
  };

  return (
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
        {restaurents.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.data.id} {...restaurent.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
