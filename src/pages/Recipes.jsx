import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { recipeData } from "../data/recipe_data";
import services from "../Services";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    recipes: [],
    search: "",
  };
  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  componentDidMount() {
    const recipes = await services.getRecipes();
    this.setState({recipes: [...this.state.recipes, ...recipes]})
  }
  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} />
      </>
    );
  }
}
