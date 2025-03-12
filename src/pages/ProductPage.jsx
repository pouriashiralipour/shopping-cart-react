import Card from "../components/Card";
import { useProducts } from "../context/ProductContext";

import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const products = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>Loading...</p>}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
};

export default ProductPage;
