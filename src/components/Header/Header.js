import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Header.css'


const Header = () => {
    return (
        <Jumbotron className="header-bg">
            <h2 className="title">_|NEWS_TODAY|_</h2>
            <p className="description">
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p className="follow-btn">
                <Button variant="dark">Follow Us</Button>
            </p>
        </Jumbotron>

    );
};

export default Header;