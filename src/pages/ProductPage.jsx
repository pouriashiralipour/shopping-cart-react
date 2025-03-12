import { useState } from "react";
import { ImSearch } from "react-icons/im";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const products = useProducts();

  const [search, setSearch] = useState("");

  const searchHandler = () => {
    console.log(search);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={search}
          onChange={(event) =>
            setSearch(event.target.value.toLowerCase().trim())
          }
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>sidebar</div>
      </div>
    </>
  );
};

export default ProductPage;
