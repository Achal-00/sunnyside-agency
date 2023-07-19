import { useState } from "react";
import Slide from "@mui/material/Slide";

// eslint-disable-next-line no-restricted-globals
let width = screen.width;

function Navbar() {
  const [state, setState] = useState(false);
  if (width >= 280 && width <= 480) {
    function handleChange() {
      setState(!state);
    }

    return (
      <div>
        <div className="mobile__navbar">
          <h1>sunnyside</h1>
          <img
            src="images/icon-hamburger.svg"
            alt="hamburger menu"
            onClick={handleChange}
          />
          <Slide direction="down" in={state} mountOnEnter unmountOnExit>
            <div className="overlay">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
          </Slide>
        </div>
      </div>
    );
  } else {
    return (
      <div className="desktop__navbar">
      <h1>sunnyside</h1>
        <div className="links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
