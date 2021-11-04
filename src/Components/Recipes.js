import React, {useState, useEffect, useRef} from "react";
import { Card } from "react-bootstrap";
import SearchedRecipeForm from "./SearchedRecipeForm"
import '../recipes.css'
import '../App.css'

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
          <Card className="rescards" style={{ width: "18rem" }}>
            <Card.Img className="resimg" variant="top" src={recipe.image} />
            <Card.Body>
              <Card.Title>
                <a className='reslinks' href={recipe.sourceUrl} target="_blank">
                  <p>{recipe.title}</p>
                </a>
              </Card.Title>
            </Card.Body>
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