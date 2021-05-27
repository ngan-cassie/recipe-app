import firebase from "firebase/app";
// calling firebase utility library belongs to firebase/app
import "firebase/firestore";
// need storage for database

const getRecipes = async () => {
  const recipes = [];
  const db = firebase.firestore();
  const snapshot = await db.collection("recipes").get();
  snapshot.forEach((doc) => {
    let recipe = doc.data();
    recipes.push(recipe);
  });
  return recipes;
};

export default {
  async getRecipes,
};
