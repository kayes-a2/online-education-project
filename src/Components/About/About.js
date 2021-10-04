import React from 'react';
import image from "../../Images/images (6).jfif"

const About = () => {
    return (
        <div className="text-center text-6xl">
            <img className="mx-auto  mt-4" src={image} alt="" srcset="" />

            <h2 className="text-2xl  ">Learn the skills to drive your career</h2>
            <div>

                <h2 className="mt-2 text-xl">Call: 1-800-2690</h2>
                <h2 className="mt-2 text-xl">Location : Dhaka,Bangladesh</h2>
            </div>
        </div>
    );
};

export default About;