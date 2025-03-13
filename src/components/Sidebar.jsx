import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../helper/helper";
import styles from "./Sidebar.module.css";
import { categories } from "../constant/list";

const Sidebar = ({ setQuery, query }) => {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((category) => (
          <li
            className={
              category.type.toLocaleLowerCase() === query.category
                ? styles.selected
                : null
            }
            key={category.id}
          >
            {category.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
