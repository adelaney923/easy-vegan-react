import React, { useEffect } from 'react'
import axios from 'axios'

const FindRestaurants = () => {


// const yelp = require("yelp-fusion");

// // Place holder for Yelp Fusion's API Key. Grab them
// // from https://www.yelp.com/developers/v3/manage_app
// const apiKey =
//   "DFCabjGEOblXuYtY4Qq7u-OgKN3M4uxS6UGYuKsensdRR6Qe5atbWa29J-jrAmt-1NDGCPfcZ7sDbOznJ94G3RTL32o3s3owG65CTK8ZERzUhUsV67OYM7uZBx18YXYx";

// const searchRequest = {
//   term: "Four Barrel Coffee",
//   location: "san francisco, ca",
// };

// const client = yelp.client(apiKey, {mode:'no-cors'});
// console.log(client)

// client
//   .search(searchRequest)
//   .then((response) => {
//     const firstResult = response.jsonBody.businesses[0];
//     const prettyJson = JSON.stringify(firstResult, null, 4);
//     console.log(prettyJson);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

    const getRestaurantsFromApi = () => {

      //using a proxy server cors-anywhere to get rid of the CROS probblem
      //change location to be used with search field
      axios
        .get(
          `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=newyork`,
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
          console.log(res.data.businesses);
          //change the state of App to reflect on the result we are given from the API
          //at the same time, setting the loading state to false
        //   this.setState({ results: res.data.businesses, loading: false });
        })
        .catch((err) => {
          //create an error message to say there is no information return from the API
        console.log(err)
        });
    };

    useEffect(() => {
        getRestaurantsFromApi()
    }, [])


    return <h1>Restaurant Search</h1>
}

export default FindRestaurants