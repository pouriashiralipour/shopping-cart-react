import { useProducts } from "../context/ProductContext";

import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const products = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {products.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
};

export default ProductPage;
