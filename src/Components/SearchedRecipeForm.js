import React, {useEffect, useState, useRef} from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import SearchedRecipe from './SearchedRecipe'

const SearchedRecipeForm = (props) => {

    const [searchedRecipes, setSearchedRecipes] = useState([])
    
    const handleSearch = (event) => {
        event.preventDefault();
        makeApiCall(props.inputSearch.current.value);
        props.inputSearch.current.value='';
    };

    const makeApiCall = (input) => {
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=410dd14f677a417eb5dda6c8be2a9f57&query=${input}&diet=vegan`
        )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results)
          setSearchedRecipes(data.results)
        })
    }

    const searchedToDisplay =
      searchedRecipes &&
      searchedRecipes.map((recipe) => {
        return (
          <>
            <Card className="bg-dark text-white news-cards">
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
        <form>
          <input
            ref={props.inputSearch}
            type="text"
            placeholder="I'm craving..."
          ></input>

            <button onClick={handleSearch}>
              Let's Eat
            </button>
        </form>

        {searchedToDisplay}
      </div>
    );
}

export default SearchedRecipeForm