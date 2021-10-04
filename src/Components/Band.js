import React from 'react';
import './Band.css'
const Band = (props) => {
    const { image, name, year, members, country, booking } = props.item;
    return (
        <div className="band-design">
            <img src={image} alt="" />
            <h4>Name: {name}</h4>
            <h5>Year: {year}</h5>
            <h5>Members: {members}</h5>
            <h5>Country: {country}</h5>
            <h5>Booking Price: {booking}</h5>
            <button className="button-design" onClick={props.handleClick}><i class="fas fa-shopping-cart"></i> Add to the cart</button>
            <div className="social-icons">
                <i class="fab fa-twitter fa-2x"></i>
                <i class="fab fa-google-plus-square fa-2x"></i>
                <i class="fab fa-google-plus-g fa-2x"></i>
            </div>

        </div>
    );
};

export default Band;