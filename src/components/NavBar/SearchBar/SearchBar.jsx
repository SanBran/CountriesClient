import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCountryByName } from "../../../redux/actions";

import styles from "./SearchBar.module.css";

const SearchBar = ({ setCurrentPage, setActive, setLoading }) => {
  const [searchString, setSearchString] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleSubmit = (e) => {
    navigate("/home");

    dispatch(getCountryByName(searchString))
      .then((res) => setActive(1))
      .catch((err) => err);

    setCurrentPage(1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={searchString}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="search"
        placeholder="Search Country"
      />
      {searchString === "" ? (
        <button className={styles.button} disabled></button>
      ) : (
        <button
          className={styles.button}
          onClick={() => handleSubmit(searchString)}
        ></button>
      )}
    </div>
  );
};

export default SearchBar;
