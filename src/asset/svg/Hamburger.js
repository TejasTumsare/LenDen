import * as React from "react";
const Hamburger = (props) => (
  <svg
    fill="white"
    width="30px"
    height="40px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>{"icn/menu"}</title>
    <path
      d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
      id="a"
    />
  </svg>
);
export default Hamburger;