import React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Face5Icon from "@mui/icons-material/Face5";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import briefcase1 from "../assets/briefcase1.png";

const Search = ({ data, setData, placeholder, searchKeys }) => {
  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filteredData = data?.filter((item) =>
      searchKeys.some((key) => item[key]?.toLowerCase().includes(keyword))
    );
    setData(filteredData);
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item>
        <Grid container alignItems="center" sx={{ margin: "20px" }}>
          <img
            src={briefcase1}
            alt="briefcase"
            style={{ marginRight: "10px" }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            FreeLancer
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} container alignItems="center">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <InputBase
            type="search"
            sx={{ ml: 1, flex: 1 }}
            placeholder={placeholder}
            inputProps={{ "aria-label": placeholder }}
            onChange={handleSearch}
          />
          <IconButton type="button" aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" aria-label="user">
            <Face5Icon />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
};

Search.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  searchKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Search.defaultProps = {
  placeholder: "Search...",
};

export default Search;
