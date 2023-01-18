import { IMG_CDN_URL} from "../../constants"

const RestaurentCard = (props) => {
    const { cloudinaryImageId, name, cuisines, avgRating } = props;
  
    return (
      <div className="restaurent_card">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="restaurent_img"
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{`${avgRating} Rating`}</h4>
      </div>
    );
  };
  
export default RestaurentCard;