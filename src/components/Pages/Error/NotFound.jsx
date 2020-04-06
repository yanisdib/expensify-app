import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        404 Not found
        <br />
        <Link to="/">Back to home</Link>
    </div>
);

export default NotFound;