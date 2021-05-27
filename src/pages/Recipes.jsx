import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { recipeData } from "../data/recipe_data";

import firebase from "firebase/app";
// calling firebase utility library belongs to firebase/app
import "firebase/firestore";
// need storage for database
const config = {
  apiKey: "AIzaSyApFBx-w7ZkpBbUKJymJRUdLtXR40AdwYQ",
  authDomain: "sewanee-dining.firebaseapp.com",
  projectId: "sewanee-dining",
  storageBucket: "sewanee-dining.appspot.com",
  messagingSenderId: "1015872019906",
  appId: "1:1015872019906:web:1933e70dbcee21282c4a5b",
  measurementId: "G-YYDRPWPEW4",
};
firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

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
    console.log(firebase.app().name);
    db.collection("recipes")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let recipe = doc.data();
          recipe.key = doc;
          console.log(recipe);
          this.setState({ recipes: this.state.recipes.concat(recipe) });
        });
      });
    console.log(this.state.recipes);
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
