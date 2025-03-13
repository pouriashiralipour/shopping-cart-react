import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router";

import styles from "./Layout.module.css";
import { useCart } from "../context/CartContext";

const Layout = ({ children }) => {
  const [state] = useCart();
  return (
    <div>
      <header className={styles.header}>
        <Link to="/products">PouriaShop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartBold />
            {!!state.itemCounter && <span>{state.itemCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>Develop by Pouria with LOVE!</footer>
    </div>
  );
};

export default Layout;
