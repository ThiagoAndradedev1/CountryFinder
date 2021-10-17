import React, { Fragment } from "react";
import spinner from "../../assets/spinner_earth.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading" className="spinnerStyle mt-10" />
    </Fragment>
  );
};

export default Spinner;
