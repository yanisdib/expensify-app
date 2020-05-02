import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItems = ({ id, description, amount, createdAt, note }) => (
        <div className="row h-100 align-items-center expense-list-item">
            <div className="col-2">
                <p className="price">
                    - {numeral(amount).format('0,0.00€').replace(',', ' ')}
                </p>
            </div>
            <div className="col-10">
                <Link to={`/edit/${id}`}>
                    <h5>{description}</h5>
                </Link>
                <p>{moment(createdAt).format('DD/MM/YYYY')}</p>
                {note ? (
                    <p><strong>Note:</strong> {note}</p>
                ) : (
                        null
                    )}
            </div>
        </div>
);

export default ExpenseListItems;
