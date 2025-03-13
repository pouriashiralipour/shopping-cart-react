import { useParams } from "react-router";
import { useProductDetails } from "../context/ProductContext";
import { Link } from "react-router";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag, IoMdPricetags } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./ProductDetailsPage.module.css";
import { useEffect, useState } from "react";
import api from "../services/config";
import Loader from "../components/Loader";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const productDetails = useProductDetails(+id);
  if (!productDetails) return <Loader />;
  return (
    <>
      <div className={styles.container}>
        <img src={productDetails.image} alt={productDetails.title} />
        <div className={styles.information}>
          <h3 className={styles.title}>{productDetails.title}</h3>
          <p className={styles.description}>{productDetails.description}</p>
          <p className={styles.category}>
            <SiOpenproject /> {productDetails.category}
          </p>
          <div>
            <span className={styles.price}>
              <IoMdPricetag />
              {productDetails.price} $
            </span>
            <Link to="/products">
              <FaArrowLeft />
              Back to shop
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
