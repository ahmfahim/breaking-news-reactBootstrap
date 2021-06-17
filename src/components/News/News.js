import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './News.css';

const News = (props) => {
    const { title, description, url, urlToImage } = props.article;

    return (
        <div className="container">
            <Card className="cart  d-flex justify-content-center">
                <Card.Img className="card-image" variant="top" src={urlToImage} />
                <Card.Body className="card-body">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Button className="card-btn" variant="dark">
                    <a href={url}>SHOW MORE</a>
                </Button>
            </Card>
        </div>
    );
};

export default News;