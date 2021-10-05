//import component's & image & external react node pakage
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import image from "../../Images/image.jpg"

//headrt component arrow function
const Header = () => {

    return (
        //full headrt part of html (jsx) 

        <div className="flex bg-gray-400 p-4">
            <div className="flex">
                <div className="w-30 p-3">
                    <img className="w-20 rounded-full ml-3" src={image} alt="" />
                </div>
                <h1 className="text-6xl">Being Learner</h1>
            </div>

            <div className="p-5 mx-auto">
                <NavLink to="/home">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Home</button>
                </NavLink>

                <NavLink to="/course">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Course</button>
                </NavLink>

                <NavLink to="/about">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">About</button>
                </NavLink>

                <NavLink to="/service">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Service</button>
                </NavLink>

                <NavLink to="/contact">
                    <button className="mx-4 text-xl bg-black text-white rounded-lg p-1">Contact</button>
                </NavLink>
            </div>
        </div>


    );
};

//export header component
export default Header;