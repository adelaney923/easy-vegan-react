import React, {useState, useEffect} from "react";
import SelectedRecipe from "./SelectedRecipe";

const Recipes = () => {
  const [loadingRecipes, setLoadingRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState('')

  const makeApiCall = () => {
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=410dd14f677a417eb5dda6c8be2a9f57&number=10&tags=vegan"
    )
      .then((response) => response.json())
      .then((data) => {
        setLoadingRecipes(data.recipes)
      });
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  //function that when you click on one of the random recipes displayed on load, it will give the id of the recipe
  //will setSelectedRecipeId to the id that the function takes in
  //can then pass it down to run new api call for that recipes info
  const handleRecipeClick =(id) => {
      setSelectedRecipeId(id)
  }

  const recipesToDisplay = loadingRecipes && loadingRecipes.map((recipe) => {
      return (
          <div className='recipe-cards' style={{border: '1px solid black'}} onClick={() => handleRecipeClick(recipe.id)}>
              <h4>{recipe.title}</h4>
              <img src={recipe.image} alt={recipe.title} />
          </div>
      )
  })

  const handleClick = () => {
      console.log('yay')
  }

  return (
    <div>
      <h1>Recipes</h1>
      <form>
        <input type="text" placeholder="I'm craving..."></input>
        <button onClick={handleClick}>Let's Eat</button>
      </form>
      {recipesToDisplay}
      <SelectedRecipe id={selectedRecipeId} />
    </div>
  );
};;

export default Recipes;
