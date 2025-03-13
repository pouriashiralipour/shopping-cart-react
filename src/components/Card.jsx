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

import { shortText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";

const Card = ({ data }) => {
  const { id, title, price, image } = data;

  const [state, dispatch] = useCart();
  //   console.log(state);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
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
          <button onClick={() => clickHandler("ADD")}>
            <TbShoppingBagCheck />
          </button>
          <button onClick={() => clickHandler("REMOVE")}>
            <MdDeleteOutline />
          </button>
          <button onClick={() => clickHandler("INCREASE")}>+</button>
          <button onClick={() => clickHandler("DECREASE")}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
