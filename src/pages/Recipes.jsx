import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import Filter from "../components/Filter";
import services from "../Services";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    recipes: [],
    search: "",
    type: "",
  };
  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  handleFilter = (e) => {
    if (e.target.innerHTML === "Reset")
      this.setState({
        type: "",
      });
    else
      this.setState({
        type: e.target.innerHTML,
      });
  };

  async componentDidMount() {
    const recipes = await services.getRecipes();
    this.setState({ recipes: [...this.state.recipes, ...recipes] });
    services.pushKeywords();
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      const recipes = await services.searchRecipes(this.state.search);
      this.setState({ recipes: recipes });
    } else if (prevState.type !== this.state.type) {
      console.log(this.state.type);
      const recipes = await services.filterRecipes(this.state.type);
      console.log(recipes);
      this.setState({ recipes: recipes });
    }
  }
  render() {
    return (
      <>
        <Search search={this.state.search} handleChange={this.handleChange} />
        <Filter handleFilter={this.handleFilter} />
        <RecipeList recipes={this.state.recipes} />
      </>
    );
  }
}
