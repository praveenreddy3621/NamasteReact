import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import Shimmer from "./Shimmer";
import useRestaurent from "../hooks/useRestaurent"

const RestaurentMenu = () => {
  // how to read the dynamic url params
  const { id } = useParams();
  const restaurent = useRestaurent(id);

  return !restaurent ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <div>
          <h2> Restaurent id : {restaurent?.id}</h2>
          <h3> {restaurent?.name}</h3>
          <img src={IMG_CDN_URL + restaurent?.cloudinaryImageId} />
          <h3>{restaurent?.area}</h3>
          <h3>{restaurent?.avgRating}</h3>
        </div>
        <div className="menu-list-container">
          <h2>Menu</h2>
          <div className='menu-list'>
            {restaurent?.menu?.items &&
              Object.values(restaurent?.menu?.items).map((item) => {
                return <li>{item.name}</li>;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurentMenu;
