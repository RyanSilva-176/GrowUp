import React from 'react';

import "./style.css"

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h3>{props.title}</h3>
                <div className='price-info'>
                    <p>R$ {props.price} Por diária</p>
                </div>
            </div>
        </div>
    );
}

export default Card;