import React, {useEffect, useState, useRef} from 'react'
import { Card } from 'react-bootstrap'
import '../App.css'


const SearchedRecipeForm = (props) => {

    // const [searchedRecipes, setSearchedRecipes] = useState([])
    const [noResults, setNoResults] = useState('')
    
    const handleSearch = (event) => {
        event.preventDefault();
        makeApiCall(props.inputSearch.current.value);
        props.inputSearch.current.value='';
        setNoResults('')
    };

    const makeApiCall = (input) => {
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=410dd14f677a417eb5dda6c8be2a9f57&query=${input}&diet=vegan&sort=random&number=100`
        )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results)
          {data.totalResults === 0 ? setNoResults("Sorry we couldn't find that. Try searching for something else or browse through the recipes below!") : props.setSearchedRecipes(data.results)}
        })
    }




    const searchedToDisplay =
      props.searchedRecipes &&
      props.searchedRecipes.map((recipe) => {
        return (
          <>
            <Card className="rescards" style={{ width: "18rem" }}>
              <Card.Img className="resimg" variant="top" src={recipe.image} />
              <Card.Body>
                <Card.Title>
                  <a
                    className="reslinks"
                    href={recipe.sourceUrl}
                    target="_blank"
                  >
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
        <form className="recipeSearch">
          <input
            ref={props.inputSearch}
            type="text"
            placeholder="I'm craving..."
          ></input>
          <button className="recipebtn" onClick={handleSearch}>
            Let's Eat
          </button>
        </form>
        <p className="noresultsmessage">{noResults}</p>
        <div className="searchedRecipes">{searchedToDisplay}</div>
      </div>
    );
}

export default SearchedRecipeForm