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

const searchRecipes = async (query) => {
  const recipes = [];
  if (query === "") return getRecipes();
  else {
    const snapshot = await firebase
      .firestore()
      .collection("recipes")
      .where("keywords", "array-contains", query)
      .get();
    snapshot.forEach((doc) => {
      let recipe = doc.data();
      recipes.push(recipe);
    });
    return recipes;
  }
};

const pushKeywords = async () => {
  const snapshot = await firebase.firestore().collection("recipes").get();

  let kw = [];
  snapshot.forEach((doc) => {
    var ref = firebase.firestore().collection("recipes").doc(doc.id);
    doc.data().keywords_list.forEach((kwd) => {
      kw = createKeywords(kwd);
      ref.update({ keywords: firebase.firestore.FieldValue.arrayUnion(...kw) });
    });
  });
};
const createKeywords = (title) => {
  const keywords = [];
  let curTitle = "";
  title.split("").forEach((letter) => {
    curTitle += letter;
    keywords.push(curTitle);
  });
  return keywords;
};

const filterRecipes = async (type) => {
  const recipes = [];
  const snapshot = await firebase
    .firestore()
    .collection("recipes")
    .where("type", "===", type)
    .get();
  snapshot.forEach((doc) => {
    let recipe = doc.data();
    recipes.push(recipe);
  });
  return recipes;
};
export default {
  getRecipes,
  searchRecipes,
  createKeywords,
  pushKeywords,
  filterRecipes,
};
