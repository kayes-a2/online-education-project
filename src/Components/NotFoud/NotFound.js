//import component's & image & external react node pakage
import React from 'react';
import image from "../../Images/download (3).jfif"

//notfound component arrow function
const NotFound = () => {

    return (
        //full notfound part of html (jsx) 
        <div >
            <h2 className="text-red-600 text-center my-7 text-3xl font-bold">Please Search Again With Valid Path -_-</h2>
            <img className="w-96 mx-auto" src={image} alt="" srcset="" />

        </div>
    );
};

//export notfound component
export default NotFound;