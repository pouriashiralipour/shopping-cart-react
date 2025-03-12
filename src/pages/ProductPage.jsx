import { useProducts } from "../context/ProductContext";

const ProductPage = () => {
  const products = useProducts();

  return (
    <div>
      <div>
        {products.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
};

export default ProductPage;
