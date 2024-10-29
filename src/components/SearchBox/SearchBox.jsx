import { useDispatch, useSelector } from "react-redux";

import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.label}>Find contacts by name</p>
        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
