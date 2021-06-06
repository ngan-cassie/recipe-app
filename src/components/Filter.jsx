import React from "react";

export default class Filter extends React.Component {
  render() {
    const { handleFilter } = this.props;
    return (
      <div className="d-flex justify-content-center mx-auto col-lg-9 my-3">
        <button
          type="button"
          className="btn btn-outline-info mx-2"
          onClick={handleFilter}
        >
          Breakfast
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-2"
          onClick={handleFilter}
        >
          Homeline
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-2"
          onClick={handleFilter}
        >
          Vegan
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-2"
          onClick={handleFilter}
        >
          Deli
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-2"
          onClick={handleFilter}
        >
          Pizza
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-2"
          onClick={handleFilter}
        >
          Grill/Pasta
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-2"
          onClick={handleFilter}
        >
          Soup
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-2"
          onClick={handleFilter}
        >
          SUM
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-2"
          onClick={handleFilter}
        >
          Dessert
        </button>
        <button
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleFilter}
        >
          Reset
        </button>
      </div>
    );
  }
}
