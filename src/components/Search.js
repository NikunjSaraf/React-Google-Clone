import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hiddenbutton = false }) => {
  const [input, setInput] = useState("");
  const [{}, dispatch] = useStateValue();
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    // console.log("hit search button");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_icon" />
        <input value={input} onChange={handleChange} />
        <MicIcon className="search_mic" />
      </div>

      {!hiddenbutton ? (
        <div className="search_buttons">
          <Button
            type="submit"
            onClick={search}
            variant="outlined"
            className="button"
          >
            Google Search
          </Button>
          <Button variant="outlined" className="button">
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            type="submit"
            onClick={search}
            variant="outlined"
            className="button_hidden"
          >
            Google Search
          </Button>
          <Button variant="outlined" className="button_hidden">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
