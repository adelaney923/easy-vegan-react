import React, {useEffect, useState} from "react";
import { Card } from "react-bootstrap";
import '../App.css'
import '../responsive.css'

const SelectedRecipe = (props) => {

    const [recipeDetails, setRecipeDetails] = useState({title: '', image: '',ingred: [], instruc: []})

  const makeApiCall = (id) => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=410dd14f677a417eb5dda6c8be2a9f57&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) =>
        setRecipeDetails({
          title: data.title,
          image: data.image,
          ingred: data.extendedIngredients,
          instruc: data.analyzedInstructions[0].steps,
        })
      );
  }

  useEffect(() => {
      makeApiCall(props.selectedId)
  }, [props])

  const ingredients = recipeDetails && recipeDetails.ingred.map((each) => {
      return (
          <li>{each.originalString}</li>
          )
      }
  );

  const instructions = recipeDetails && recipeDetails.instruc.map((step) => {
      return (
          <li>{step.step}</li>
      )
  })

  
      let recipeDetailHtml = ''
      if (recipeDetails) {
          recipeDetailHtml = (
            <div>
              <Card className="selectedRes" style={{ width: "80%" }}>
                <Card.Img
                  className="selectedResimg"
                  variant="top"
                  src={recipeDetails.image}
                />
                <Card.Body>
                  <Card.Title>
                    <h4 className="selectrestitle">{recipeDetails.title}</h4>
                  </Card.Title>
                  <Card.Text>
                      <h3>Ingredients:</h3>{ingredients}
                  </Card.Text>
                  <Card.Text>
                      <h3>Instructions:</h3>{instructions}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
      }

  return (
    <>
        {props.selectedId ? recipeDetailHtml : ''}
    </>
  );
}

export default SelectedRecipe

