import React from "react";
import "./Header.css";
export default function Header({ children, title, styleClass }) {
  return (
    <header>
      <div className="container-fluid">
        <div className={`row align-items-center ${styleClass}`}>
          <div className="col text-center">
            <h1 className="text-uppercase display-3 letter-spacing text-recipe">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "food recipes",
  styleClass: "header-hero",
};
