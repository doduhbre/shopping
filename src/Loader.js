import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
  );
}
export default Loader;
