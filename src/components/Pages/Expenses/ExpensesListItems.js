import React from 'react';
import { Link } from 'react-router-dom';
const ExpenseListItems = ({ dispatch, id, description, amount, createdAt, note }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
        <p>{note}</p>
    </div>
);

export default ExpenseListItems;
