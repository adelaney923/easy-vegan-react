import React, {useEffect, useState} from "react";
import {Card} from 'react-bootstrap';
import '../veganNews.css'

const VeganNews = () => {
    const [vegArticles, setVegArticles] = useState([])
    
    const makeApiCall = () => {
    fetch("https://vegan-news.p.rapidapi.com/getnews", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "vegan-news.p.rapidapi.com",
        "x-rapidapi-key": "7986ba462cmsh508be8a4909dd3cp1cc7b9jsn09febfef5121",
      },
    })
      .then((response) => response.json())
      .then((data) => {
      console.log(data)
      setVegArticles(data.articles)
      })
    }

    useEffect(() => {
        makeApiCall()
    }, [])
    
    const articles = vegArticles && vegArticles.map((article) => {
        return (
          <Card className="rescards" style={{ width: "18rem" }}>
            <Card.Img
              className="resimg"
              variant="top"
              src={article.urlToImage}
            />
            <Card.Body>
              <Card.Title>
                <a className='reslinks' href={article.url} target="_blank">
                  <p>{article.title}</p>
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        );
    })


    return (
      <div id="newsArticles">
        <h1>Vegan News</h1>
        <div className="articles">{articles}</div>
      </div>
    );
}

export default VeganNews