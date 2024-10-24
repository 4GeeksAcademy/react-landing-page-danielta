import React from "react";
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div id="cardTemplate" className="card" style={{ width: "18rem", height: "25rem" }}>
            <img style={{ height: "13rem" }} src={props.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

Card.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
};

export default Card;