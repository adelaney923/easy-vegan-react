import React, {useState, useEffect, useRef} from "react";
import { Card } from "react-bootstrap";
import SearchedRecipeForm from "./SearchedRecipeForm"
import '../recipes.css'

const Recipes = (props) => {
  const [loadingRecipes, setLoadingRecipes] = useState([]);
  const [searchedRecipes, setSearchedRecipes] = useState()
  console.log(searchedRecipes)

  const makeApiCall = () => {
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=410dd14f677a417eb5dda6c8be2a9f57&number=20&tags=vegan"
    )
      .then((response) => response.json())
      .then((data) => {
        setLoadingRecipes(data.recipes);
      });
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  const recipesToDisplay = !searchedRecipes && loadingRecipes &&
    loadingRecipes.map((recipe) => {
      return (
        <>
          <Card
            className="bg-dark text-white news-cards"
            style={{ width: "20rem" }}
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
      <SearchedRecipeForm inputSearch={props.inputSearch} searchedRecipes={searchedRecipes} setSearchedRecipes={setSearchedRecipes}/>
      <div className="recipesDisplay">{recipesToDisplay}</div>
    </div>
  );
};

export default Recipes;