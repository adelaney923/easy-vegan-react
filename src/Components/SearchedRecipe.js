import React, {useEffect, useState} from 'react'

const SearchedRecipe = (props) => {
    // console.log(props.input.current.value)

    // const makeApiCall = () => {
    //     fetch(
    //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=410dd14f677a417eb5dda6c8be2a9f57&query=${props.input.current.value}&diet=vegan`
    //     )
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));
    // }

    // useEffect(() => {
    //     makeApiCall()
    // }, [props.input])


    return (
        <h1>SearchedRecipe</h1>
    )
}

export default SearchedRecipe