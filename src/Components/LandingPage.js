import React, {useState, useEffect} from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import '../landingPage.css'
import '../responsive.css'

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

    useEffect(() => {
      makeApiCall();
    }, []);

    const ingredientsList = randomRecipe && randomRecipe.ingredients.map((ingredient) => {
      return (
        <ul className='landingIngred'>
          <li>{ingredient.originalString}</li>
        </ul>
      )
    })

    const instructionsList = randomRecipe && randomRecipe.instructions.map((instruction) => {
      return (
        <ul className='landingInstruc'>
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
          
          <Card className="hiddenMobile" style={{ width: "80%" }}>
            <Card.Img variant="top" src={randomRecipe.img} />
            <Card.Body>
              <Card.Title>{randomRecipe.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Ingredients: {ingredientsList}</ListGroupItem>
              <ListGroupItem>Instructions: {instructionsList}</ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      </>
    );
}

export default LandingRecipe