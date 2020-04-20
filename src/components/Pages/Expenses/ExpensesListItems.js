import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItems = ({ id, description, amount, createdAt, note }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h5>{description}</h5>
        </Link>
        <p>{numeral(amount).format('$0.00')} - {moment(createdAt).format('DD/MM/YYYY')}</p>
        {note ? (
            <p>Note: {note}</p>
        ) : (
                null
            )}
    </div>
);

export default ExpenseListItems;
