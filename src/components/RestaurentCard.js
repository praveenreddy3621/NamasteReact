import { IMG_CDN_URL } from "../../constants";
import { Link } from "react-router-dom";

const RestaurentCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, id } = props;

  return (
    <Link to={`/restaurent/${id}`}>
      <div className="restaurent_card">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurent_img" />
        <h2>{name}</h2>
        <h3>{cuisines && cuisines.join(", ")}</h3>
        <h4>{`${avgRating} Rating`}</h4>
      </div>
    </Link>
  );
};

export default RestaurentCard;
