import React, { createContext, useContext, useEffect, useState } from "react";

import api from "../services/config";

const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export { useProducts };
export default ProductsProvider;
