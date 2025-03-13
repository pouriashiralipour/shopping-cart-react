import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router";

import styles from "./Card.module.css";
import { useCart } from "../context/CartContext";

import { shortText } from "../helper/helper";

const Card = ({ data }) => {
  const { id, title, price, image } = data;

  const [state, dispatch] = useCart();
  console.log(state);

  const addToCartHandler = () => {
    dispatch({ type: "ADD_ITEM", payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={shortText(title)} />
      <h3>{shortText(title)}</h3>
      <p>${price}</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button onClick={addToCartHandler}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
