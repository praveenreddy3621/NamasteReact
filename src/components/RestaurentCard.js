import { IMG_CDN_URL } from "../../constants";
import { Link } from "react-router-dom";

const RestaurentCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, id } = props;

  return (
    <Link to={`/restaurent/${id}`}>
      <div className="w-56 p-2 m-1 shadow-lg bg-pink-50">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurent_img" />
        <h2 className="text-xl font-bold">{name}</h2>
        <h3 className="text-lg">{cuisines && cuisines.join(", ")}</h3>
        <h4 className="text-base font-medium">{`${avgRating} Rating`}</h4>
      </div>
    </Link>
  );
};

export default RestaurentCard;
