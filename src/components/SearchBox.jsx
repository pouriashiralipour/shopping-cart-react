import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

const SearchBox = ({ search, setSearch, setQuery }) => {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
};

export default SearchBox;
