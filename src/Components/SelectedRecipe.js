import React, {useEffect} from 'react'

const SelectedRecipe = (props) => {
    //sending down the id that is selected
    //can use that in api call to get specific info for recipe
    //make sure this works, was not connecting to internet last time
    const makeApiCall = () => {
        fetch(
          `https://api.spoonacular.com/recipes/${props.id}/information?apiKey=410dd14f677a417eb5dda6c8be2a9f57&includeNutrition=false`
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    useEffect(() => {
        makeApiCall()
    }, [props.id])

    return <h1>Selected recipe</h1>
}

export default SelectedRecipe