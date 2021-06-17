import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './TopHeadlines.css';


const TopHeadlines = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e8ed1069b50348e3aa443f9010917047';
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])

    return (
        <div>
            <h1 className="headline-title">TOP HEADLINE TODAY</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadlines;