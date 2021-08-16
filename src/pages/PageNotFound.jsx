import React from "react";
import { Link } from "react-router-dom";

import "../styles/404Page.css";

function PageNotFound() {
  return (
    <div className="pageNotFound__layout">
      <div className="card__pageNotFound">
        <h1 className="Neox__logo">NEOX</h1>
        <div className="pageNotFound__content">
          <h1>404</h1>
          <h2>Page not found</h2>
          <h3>
            The link you checked may be broken or the page may have been removed
            or renamed
          </h3>
          <div className="link__back">
            <Link to="/">
              <h3 className="goBack__Button">Go back</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
