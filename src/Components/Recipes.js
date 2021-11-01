import React, {useState, useEffect, useRef} from "react";
import SelectedRecipe from "./SelectedRecipe";
import SearchedRecipe from "./SearchedRecipe"
import '../recipes.css'

const Recipes = () => {
  const [loadingRecipes, setLoadingRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState("");

  const makeApiCall = () => {
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=410dd14f677a417eb5dda6c8be2a9f57&number=10&tags=vegan"
    )
      .then((response) => response.json())
      .then((data) => {
        setLoadingRecipes(data.recipes);
      });
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  //function that when you click on one of the random recipes displayed on load, it will give the id of the recipe
  //will setSelectedRecipeId to the id that the function takes in
  //can then pass it down to run new api call for that recipes info
  const handleRecipeClick = (id) => {
    setSelectedRecipeId(id);
  };

  const inputSearch = useRef();

  const recipesToDisplay =
    loadingRecipes &&
    loadingRecipes.map((recipe) => {
      return (
        <div className="container" onClick={() => handleRecipeClick(recipe.id)}>
          <img src={recipe.image} alt={recipe.title} />
          <div className="text-block">
            <p>{recipe.title}</p>
          </div>
        </div>
      );
    });

  const handleClickSearch = () => {
    console.log(inputSearch);
  };

  return (
    <div>
      <h1>Recipes</h1>
      <form>
        <input ref={inputSearch} type="text" placeholder="I'm craving..."></input>
        <button onClick={handleClickSearch}>Let's Eat</button>
      </form>
      <div className="recipesDisplay">{recipesToDisplay}</div>
      <SelectedRecipe id={selectedRecipeId} />
      <SearchedRecipe input={inputSearch} />
    </div>
  );
};

export default Recipes;