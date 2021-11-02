import React, {useState, useEffect, useRef} from "react";
import { Card } from "react-bootstrap";
import SearchedRecipeForm from "./SearchedRecipeForm"
import '../recipes.css'

const Recipes = (props) => {
  const [loadingRecipes, setLoadingRecipes] = useState([]);

  console.log(props)

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

  // const inputSearch = useRef();

  //function that when you click on one of the random recipes displayed on load, it will give the id of the recipe
  //will setSelectedRecipeId to the id that the function takes in
  //can then pass it down to run new api call for that recipes info

  const recipesToDisplay =
    loadingRecipes &&
    loadingRecipes.map((recipe) => {
      return (
        <>
          <Card
            className="bg-dark text-white news-cards"
          >
            <Card.Img src={recipe.image} alt={recipe.title} />
            <Card.ImgOverlay>
              <Card.Title className="articletitle">
                <a href={recipe.sourceUrl}>
                <p>{recipe.title}</p>
                </a>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </>
      );
    });

  return (
    <div>
      <h1>Recipes</h1>
      <SearchedRecipeForm inputSearch={props.inputSearch} />
      <div className="recipesDisplay">{recipesToDisplay}</div>
    </div>
  );
};

export default Recipes;