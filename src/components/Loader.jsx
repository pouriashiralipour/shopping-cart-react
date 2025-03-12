import { FadeLoader } from "react-spinners";

import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <FadeLoader color="#fe5d42" />
    </div>
  );
};

export default Loader;
