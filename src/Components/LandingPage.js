import React, {useState, useEffect} from 'react'
import landingPage from '../landingPage.css'

const LandingRecipe = () => {
    const [randomRecipe, setRandomRecipe] = useState({title: '', img: '', ingredients: [], instructions: []});

    const makeApiCall = () => {
      fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=410dd14f677a417eb5dda6c8be2a9f57&number=1&tags=vegan"
      )
        .then((response) => response.json())
        .then((data) => {
          setRandomRecipe({title: data.recipes[0].title, img: data.recipes[0].image, ingredients: data.recipes[0].extendedIngredients, instructions: data.recipes[0].analyzedInstructions[0].steps})
        });
    };

    // useEffect(() => {
    //   makeApiCall();
    // }, []);

    const ingredientsList = randomRecipe && randomRecipe.ingredients.map((ingredient) => {
      return (
        <ul>
          <li>{ingredient.originalString}</li>
        </ul>
      )
    })

    const instructionsList = randomRecipe && randomRecipe.instructions.map((instruction) => {
      return (
        <ul>
          <li>{instruction.step}</li>
        </ul>
      )
    })


    return (
      <>
        <div id="welcome">
          <h1 className="sitename">
            <span className="easy">easy</span>
            <span className="vegan">vegan</span>
          </h1>
          <div className="welcome-text">
            <p>
              Your place for a smooth transition into the world of veganism.
            </p>
          </div>
        </div>

        <div className="recipeDiv">
          <p>Try your first vegan recipe today!</p>
          <div id="landingRecipe">
            <h3>{randomRecipe.title}</h3>
            <img src={randomRecipe.img} alt={randomRecipe.title} />
            <div className="ingredients">
              <h5>What You Need:</h5>
              {ingredientsList}
            </div>
            <div className="insturctions">
              <h5>How To:</h5>
              {instructionsList}
            </div>
          </div>
        </div>
      </>
    );
}

export default LandingRecipe