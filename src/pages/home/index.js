import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ routerProps }) => {
    return (
        <div>
            <Link to='/cards'>Cards</Link>
        </div>
    );
};

export default Home;
