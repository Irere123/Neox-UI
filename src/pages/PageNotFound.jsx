import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>404 Page Not found</h1>
      <Link to="/">
        <h3>Go Home</h3>
      </Link>
    </div>
  );
}

export default PageNotFound;
