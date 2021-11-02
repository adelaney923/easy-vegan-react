import React, {useEffect, useState, useRef} from 'react'

const SearchedRecipe = () => {
    // console.log(props)
    const inputSearch = useRef()
    
    const handleSearch = (event) => {
        event.preventDefault();
        makeApiCall()
        inputSearch.current.value=''
    };

    const makeApiCall = () => {
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=410dd14f677a417eb5dda6c8be2a9f57&query=${inputSearch.current.value}&diet=vegan`
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    // useEffect(() => {
    //     makeApiCall()
    // }, [handleSearch])


    return (
      <form>
        <input
        ref={inputSearch}
        //   value={searchedTerm}
        //   onChange={handleChange}
          type="text"
          placeholder="I'm craving..."
        ></input>
        <button onClick={handleSearch}>Let's Eat</button>
      </form>
    );
}

export default SearchedRecipe