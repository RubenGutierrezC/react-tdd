import { TextField } from "@mui/material";
import { isEmpty, clone } from "lodash";
import { ChangeEvent } from "react";

const SearchBox = ({ term, onSearch }: any) => {
  const protect = (event: ChangeEvent<HTMLInputElement>) => {
    const value = clone(event.target.value);
    if (!isEmpty(value.trim())) {
      return onSearch(event);
    }
  };

  return (
    <TextField
      label="search"
      value={term}
      data-test="search"
      onChange={protect}
      margin="normal"
      variant="outlined"
    />
  );
};

export default SearchBox;
