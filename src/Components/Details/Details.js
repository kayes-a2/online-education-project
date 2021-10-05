//import component"s & css file & external react node pakage
import React from 'react';
import "./Details.css"

//details componet arroe function
const Details = (props) => {

    //data distuctring
    const { name, image, designation } = props.item

    return (
        ////full details part of html (jsx)
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

//export details component
export default Details;