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
      .then((data) => setVegArticles(data.articles));
    }

    useEffect(() => {
        makeApiCall()
    }, [])
    
    const articles = vegArticles && vegArticles.map((article) => {
        return (
          <Card className="bg-dark text-white news-cards">
            <Card.Img src={article.urlToImage} alt="" />
            <Card.ImgOverlay>
              <Card.Title className="articletitle">
                <a href={article.url}>
                  <p>{article.title}</p>
                </a>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        );
    })

//     <Card className="bg-dark text-white">
//   <Card.Img src={article.urlToImage} alt='' />
//   <Card.ImgOverlay>
//     <Card.Title>
//       <a href={article.url}>
//           <p>{article.title}</p>
//       </a></Card.Title>
//   </Card.ImgOverlay>
// </Card>
    return (
      <div id="newsArticles">
        <h1>Vegan News</h1>
        {articles}
      </div>
    );
}

export default VeganNews