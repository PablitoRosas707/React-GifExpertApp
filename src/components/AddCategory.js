import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState(""); // ''

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        color="primary"
        value={inputValue}
        onChange={handleInputChange}
        id="outlined-basic"
        label="Buscar"
        variant="filled"
        size="small"
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
