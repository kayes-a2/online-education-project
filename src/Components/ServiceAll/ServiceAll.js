//import component's & react node pakage
import React from 'react';

//serviceall arrow function
const ServiceAll = (props) => {

    //data distuctring
    const { image, name, price, access, admission } = props.course

    return (
        //full serviceAll part of html (jsx) 
        <div >
            <div className="max-w-sm  overflow-hidden shadow-lg m-4 mx-auto rounded-lg pt-5 bg-green-200 text-xl ">
                <div className="cart-image text-center">
                    <img className="mx-auto " src={image} alt="" />
                </div>

                <div className="px-6 py-4 text-center ">
                    <h2>Name :<span className="font-bold text-xl mb-2"> {name} </span></h2>

                    <h2>Price : $<span className="font-bold text-xl mb-2"> {price} </span></h2>

                    <h2>Access : <span className="font-bold text-xl mb-2"> {access} </span></h2>

                    <h2>Admission :<span className="font-bold text-xl mb-2"> {admission} </span></h2>
                </div>

            </div>
        </div>
    );
};

//export ServiceAll component 
export default ServiceAll;