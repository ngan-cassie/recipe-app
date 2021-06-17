import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { handleChange, search } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-cute text-capitalize">
              let's search for some{" "}
              <strong className="text-recipe">CLURG RECIPES! </strong>
            </h1>
            <form className="mt-5">
              <label htmlFor="search">Please type in all lowercase</label>
              <div className="input-group mt-1">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="orange chicken, broccoli casserole, rice pilaf"
                  value={search}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
