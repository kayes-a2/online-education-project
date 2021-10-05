import React from 'react';
import "./Details.css"

const Details = (props) => {
    const { name, image, designation } = props.item

    return (
        <div>
            <div className="about-cart">
                <div>
                    <img className="about-image" src={image} alt="" />
                </div>
                <div className="details">
                    <h4> <span className="property">Name</span> : {name}</h4>
                    <h4><span className="property"> Designation</span> : {designation}</h4>
                </div>
            </div >
        </div>

    );
};

export default Details;