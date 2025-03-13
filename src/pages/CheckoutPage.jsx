import { ImGift } from "react-icons/im";
import { useCart } from "../context/CartContext";
import styles from "./CeckoutPage.module.css";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

const CheckoutPage = () => {
  const [state, dispatch] = useCart();
  const cartHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemCounter) {
    return (
      <div className={styles.container}>
        <img src="src/assets/shopping.png"></img>;
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} cartHandler={cartHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            product={product}
            cartHandler={cartHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
