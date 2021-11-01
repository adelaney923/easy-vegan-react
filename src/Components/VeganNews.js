import React, {useEffect, useState} from "react";
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
          <div className="container">
            <img src={article.urlToImage} alt="" />
            <div className="text-block">
              <a href={article.url}>
                <h4>{article.title}</h4>
              </a>
            </div>
          </div>
        );
    })
    return (
      <div id="newsArticles">
        <h1>Vegan News</h1>
        {articles}
      </div>
    );
}

export default VeganNews