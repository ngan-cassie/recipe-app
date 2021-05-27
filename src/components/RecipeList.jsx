import React, { Component } from "react";
import Recipe from "./Recipe";
export default class SearchList extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div className="container py-5">
        {/* title */}
        <div className="row">
          <div className="col-6 col-md-3 mx-auto text-center text-uppercase mb-3">
            <h1 className="text-cute">recipe list</h1>
          </div>
        </div>
        {/* end of title */}
        <div className="row">
          {recipes.map((recipe) => (
            <Recipe key={recipe} recipe={recipe}></Recipe>
          ))}
        </div>
      </div>
    );
  }
}
