const shortText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedPeoducts = products.filter((product) =>
    product.title.toLowerCase().includes(search),
  );
  return searchedPeoducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filtredProducts = products.filter(
    (product) => product.category === category,
  );
  return filtredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

export { shortText, searchProducts, filterProducts, createQueryObject };
