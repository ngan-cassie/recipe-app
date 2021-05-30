import React, { Component } from "react";
export default class Recipe extends Component {
  render() {
    const type = this.props.recipe.type;
    const img_url = this.props.recipe.img_url;
    const title = this.props.recipe.title;
    const url = this.props.recipe.url;
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card" style={{ height: "100%" }}>
          <img
            src={img_url}
            style={{ overflow: "hidden" }}
            className="img-card-top"
            alt="recipe"
          />
          <div className="card-body text-uppercase text-cute text-center text-purple">
            <h4>{title}</h4>
          </div>
          <div className="card-body text-center">
            <h6>{type}</h6>
          </div>
          <div className="card-footer">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mx-2"
            >
              view the recipe
            </a>
          </div>
        </div>
      </div>
    );
  }
}
