# Project Overview

## Project Links

- [github repo](https://git.generalassemb.ly/adelaney923/easy-vegan-react)
- [Link to Site](https://adelaney923.github.io/easy-vegan-react/#/)

## Project Description

EasyVegan will be a site for all things vegan.  There will be a component that allows the user to search for vegan recipes.  The recipes will be found using an API call to spoonacular.  My postMVP goal is to find another API to use that allows a user to search for restaurants that have vegan options based on a location.

## API

Spoonacular allows an API call to be made that can filter recipes by diet, so in this case that will be a vegan diet.  The search API call returns data that has just the id, title and image.  Once a user selects one of the recipes, I will then have to make a second API call to actually get that information for the selected recipe.


```
{data: {-results: [
{
id: 660101,
title: "Simple Garlic Pasta",
image: "https://spoonacular.com/recipeImages/660101-312x231.jpg",
imageType: "jpg"
},
{
id: 1096227,
title: "Pesto Zucchini Pasta (Whole 30 Approved)",
image: "https://spoonacular.com/recipeImages/1096227-312x231.jpg",
imageType: "jpg"
},
} 
}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile Wireframe](https://res.cloudinary.com/adelaney923/image/upload/v1635531814/Portfolio%20Images/easyVegan%20react%20project/Screen_Shot_2021-10-29_at_11.22.09_AM_ogmwxf.png)
- [React Architecture](https://res.cloudinary.com/adelaney923/image/upload/v1635532364/Portfolio%20Images/easyVegan%20react%20project/Screen_Shot_2021-10-29_at_11.32.25_AM_twb7bi.png)


### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- Allow user to make a search and use an API call to return results based on search

#### PostMVP EXAMPLE

- Find an API that allows user to find vegan restaurants based on location
- Use another API to create a Vegan News Page

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the footer including a possible contact form
| Main | Here is where I will put down the main components including the recipe page and the why veganism page
| Recipes | The recipes portion will maybe have further broken down components to display things based on user choice.




| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating Nav Component | H | 1.5hrs|  |
| Creating Footer Component | H | 1hr | |
| Creating Recipe  Component | H | 8hrs | |
| Creating Why go Vegan Component| H | 2hrs |  |
| Working with API | H | 4hrs | |
| CSS & Making it Look Good | H | 3 hrs | |
| Total | H | 19.5hrs|  |

## Additional Libraries


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
