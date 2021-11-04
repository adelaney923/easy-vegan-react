import React, { useEffect, useRef, useState } from 'react'
import { Card } from 'react-bootstrap';
import axios from 'axios'
import '../App.css'

const FindRestaurants = () => {
  const [searchedResults, setSearchedResults] = useState([]);

    const getRestaurantsFromApi = (input) => {
      axios
        .get(
          `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=${input}`,
          {
            //required authorization format from API
            headers: {
              //Bearer with API key
              Authorization:
                "Bearer DFCabjGEOblXuYtY4Qq7u-OgKN3M4uxS6UGYuKsensdRR6Qe5atbWa29J-jrAmt-1NDGCPfcZ7sDbOznJ94G3RTL32o3s3owG65CTK8ZERzUhUsV67OYM7uZBx18YXYx",
            },
            //option params passed to API call to retrieve only vegan spots
            params: {
              categories: "vegan",
            },
          }
        )
        .then((res) => {
          setSearchedResults(res.data.businesses);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    

    const locationSearch=useRef()

    const handleSearch = (event) => {
      event.preventDefault()
      getRestaurantsFromApi(locationSearch.current.value)
      locationSearch.current.value=''
    }

    console.log(searchedResults)
    const restaurantList = searchedResults && searchedResults.map((restaurant) => {
      return (
        <Card className='rescards' style={{ width: "18rem" }}>
          <Card.Img className='resimg' variant="top" src={restaurant.image_url} />
          <Card.Body>
            <Card.Title>
              <a className='reslinks' href={restaurant.url} target="_blank">
                {restaurant.name}
              </a>
            </Card.Title>
            <Card.Text>
              <p>Location: {restaurant.location.address1}</p>
              <p>They're {restaurant.is_closed ? "closed." : "open!"}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      );
    })


    return (
      <div className="findrestaurant">
        <h1>Restaurant Finder</h1>
        <p className="finderintro">
          Being vegan has become so much easier! Many restaurants, cafes and
          bars now have vegan options. Search with your location below to see
          what is in your area.
        </p>
        <form className="restaurant-search">
          <input
            ref={locationSearch}
            type="text"
            placeholder="I'm located in..."
          />
          <button onClick={handleSearch}>Search</button>
        </form>
        <div className="restaurants">{restaurantList}</div>
      </div>
    );
}

export default FindRestaurants