import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";

const Search = props => {
  const classes = useStyles();
  const checkEnterTriggered = e => {
    if (e.charCode === 13) {
      props.showResult();
    }
  };
  return (
    <div>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Enter your city"
          onChange={props.city}
          value={props.cityValue}
          onKeyPress={checkEnterTriggered}
        />
        {props.cityValue ? (
          <IconButton
            className={classes.iconButton}
            onClick={props.defaultCity}
          >
            <ClearIcon />
          </IconButton>
        ) : null}
      </Paper>
      <IconButton onClick={props.showResult}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    alignItems: "center",
    width: 400,
    marginTop: 15,
    display: "inline-flex"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

export default Search;
