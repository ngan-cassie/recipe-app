import React, { Component } from "react";
import Recipe from "./Recipe";
export default class SearchList extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div className="container py-5">
        <div className="row">
          {recipes.map((recipe) => (
            <Recipe key={recipe} recipe={recipe}></Recipe>
          ))}
        </div>
      </div>
    );
  }
}
