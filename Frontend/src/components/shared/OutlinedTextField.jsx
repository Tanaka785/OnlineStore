import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

export default function OutlinedTextField(props) {
  const {
    onSearchClick,
    value,
    onChange,
    placeholderText,
    onFocus,
    onBlur,
    ...rest
  } = props;

  return (
    <TextField
      value={value}
      onChange={onChange}
      label={placeholderText}
      onFocus={onFocus}
      onBlur={onBlur}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onSearchClick}>
              <SearchIcon color="primary" />
            </IconButton>
          </InputAdornment>
        ),
      }}
      variant="outlined"
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            // borderColor: "primary.main",
          },
        },
      }}
      {...rest}
    />
  );
}
