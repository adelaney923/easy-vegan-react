import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import '../landingPage.css'
import '../responsive.css'

const LandingRecipe = () => {
    const [randomRecipe, setRandomRecipe] = useState({title: '', img: '', url: ''});

    const makeApiCall = () => {
      fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=410dd14f677a417eb5dda6c8be2a9f57&number=1&tags=vegan"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setRandomRecipe({title: data.recipes[0].title, img: data.recipes[0].image, url: data.recipes[0].sourceUrl })
        });
    };

    useEffect(() => {
      makeApiCall();
    }, []);

    return (
      <>
        <div id="welcome">
          <div className="landingContent">
            <div className="titleAndRec">
              <div className='titleCont'>
                <h1 className="sitename">
                  <span className="easy">easy</span>
                  <span className="vegan">vegan</span>
                </h1>
                <div className="welcome-text">
                  <p>
                    Your place for a smooth transition into the world of
                    veganism.
                  </p>
                </div>
              </div>

              <Card className="hiddenMobile">
                <p className='cardP'>Recipe of the Day:</p>
                <Card.Img variant="bottom" src={randomRecipe.img} />
                <Card.Body>
                  <Card.Title>
                    <a href={randomRecipe.url}>
                      <h6>{randomRecipe.title}</h6>
                    </a>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>

            <div className="landingNav">
              <Link className="nav-links" to="/recipes">
                <Card className="navCards">
                  <Card.Img
                    variant="top"
                    src="https://res.cloudinary.com/adelaney923/image/upload/v1635976926/easy-vegan-recipes-img_xo8e5g.jpg"
                  />
                  <Card.Body>
                    <Card.Text>Recipes</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Link className="nav-links" to="/vegannews">
                <Card className="navCards">
                  <Card.Img
                    variant="top"
                    src="https://res.cloudinary.com/adelaney923/image/upload/v1635976924/vegan-news-img_kxkc4g.jpg"
                  />
                  <Card.Body>
                    <Card.Text>Vegan News</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Link className="nav-links" to="/findrestaurants">
                <Card className="navCards">
                  <Card.Img
                    variant="top"
                    src="https://res.cloudinary.com/adelaney923/image/upload/v1635976921/vegann-rest-img_ivp1qi.jpg"
                  />
                  <Card.Body>
                    <Card.Text>Find a Restaurant</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}

export default LandingRecipe