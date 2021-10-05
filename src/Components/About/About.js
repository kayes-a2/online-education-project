//import component's & css file & custom hook & external react node pakage 
import React from 'react';
import UseDetails from '../../Hooks/About';
import Details from '../Details/Details';
import "./About.css"

//about arrow function
const About = () => {
    //custom hook
    const [items, setItems] = UseDetails()

    return (
        //full about part of html (jsx) and inside of about details component data pass

        <div>
            <h2 className="m-7 text-indigo-400 font-bold text-3xl text-center">About Our Team</h2>
            <div className="about-container">

                {
                    items.map(item => <Details key={item.id} item={item} ></Details>)
                }
            </div>
        </div>
    );
};

//export about component
export default About;