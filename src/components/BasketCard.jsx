import { MdDeleteOutline } from "react-icons/md";
import { shortText } from "../helper/helper";
import styles from "./BasketCard.module.css";

const BasketCard = ({ product, cartHandler }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <p>{shortText(product.title)}</p>
      <div className={styles.actions}>
        {product.quantity === 1 && (
          <button onClick={() => cartHandler("REMOVE", product)}>
            <MdDeleteOutline />
          </button>
        )}
        {product.quantity > 1 && (
          <button onClick={() => cartHandler("DECREASE", product)}>-</button>
        )}
        <span>{product.quantity}</span>
        <button onClick={() => cartHandler("INCREASE", product)}>+</button>
      </div>
    </div>
  );
};

export default BasketCard;
