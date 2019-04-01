import React from "react";
import PropTypes from "prop-types";

import "./SearchForm.css";

const SearchForm = ({ searchTerm, onChange }) => (
  <form className="search__form">
    <img className="button__search" src="/search.png" alt="search" />
    <input
      className="search__input"
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={onChange}
    />
  </form>
);

SearchForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default SearchForm;
