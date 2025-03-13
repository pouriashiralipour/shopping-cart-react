import {
  TbAddressBook,
  TbListDetails,
  TbMinus,
  TbShoppingBagCheck,
  TbTrash,
} from "react-icons/tb";
import { Link } from "react-router";

import styles from "./Card.module.css";
import { useCart } from "../context/CartContext";

import { productQuantity, shortText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";

const Card = ({ data }) => {
  const { id, title, price, image } = data;

  const [state, dispatch] = useCart();
  const quantity = productQuantity(state, id);
  console.log(quantity);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={shortText(title)} />
      <h3>{shortText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE")}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE")}>-</button>
          )}
          <span>{!!quantity && quantity}</span>
          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
