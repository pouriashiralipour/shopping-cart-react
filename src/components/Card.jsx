import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router";
import { shortText } from "../helper/helper";

const Card = ({ data }) => {
  const { id, title, price, category, image } = data;
  return (
    <div>
      <img src={image} alt={shortText(title)} style={{ width: "150px" }} />
      <h3>{shortText(title)}</h3>
      <p>${price}</p>
      <div>
        <Link to={`products/${id}`}>
          <TbListDetails />
        </Link>
        <button>
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
};

export default Card;
