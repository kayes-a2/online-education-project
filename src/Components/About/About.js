import React from 'react';
import UseDetails from '../../Hooks/About';
import Details from '../Details/Details';
import "./About.css"


const About = () => {
    const [items, setItems] = UseDetails()
    return (
        <div>
            <h2 className="m-7 font-bold text-3xl text-center">About Our Team</h2>
            <div className="about-container">

                {
                    items.map(item => <Details key={item.id} item={item} ></Details>)
                }
            </div>
        </div>
    );
};

export default About;