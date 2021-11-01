import React, { useEffect, useState } from "react";

const SelectedRecipe = (props) => {
  
    const [recipeInfo, setRecipeInfo] = useState({title: '', img: '', ingredients: [], instructions: []})
  //sending down the id that is selected
  //can use that in api call to get specific info for recipe
  //make sure this works, was not connecting to internet last time
  const makeApiCall = () => {
    fetch(
      `https://api.spoonacular.com/recipes/${props.id}/information?apiKey=410dd14f677a417eb5dda6c8be2a9f57&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => setRecipeInfo({title: data.recipes[0].title, img: data.recipes[0].image, ingredients: data.recipes[0].extendedIngredients, instructions: data.recipes[0].analyzedInstructions[0].steps}))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    makeApiCall();
  }, [props.id]);

  const ingredientsList =
    recipeInfo &&
    recipeInfo.ingredients.map((ingredient) => {
      return (
        <ul>
          <li>{ingredient.originalString}</li>
        </ul>
      );
    });

  const instructionsList =
    recipeInfo &&
    recipeInfo.instructions.map((instruction) => {
      return (
        <ul>
          <li>{instruction.step}</li>
        </ul>
      );
    });

  return (
        <div id='selectedRecipe'>
            <h1>SelectedRecipe</h1>
            <h1>{recipeInfo.title}</h1>
            <img src={recipeInfo.img} alt={recipeInfo.title} />
            {ingredientsList}
            {instructionsList}
        </div>
  );
};

export default SelectedRecipe;
