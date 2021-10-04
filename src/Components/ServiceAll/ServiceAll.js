import React from 'react';

const ServiceAll = (props) => {
    const { image, name, price, access, admission } = props.course
    return (
        <div >
            <div className="max-w-sm  overflow-hidden shadow-lg m-4 mx-auto rounded-lg pt-5 bg-green-200 ">
                <div className="cart-image text-center">
                    <img className="mx-auto " src={image} alt="" srcset="" />
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

export default ServiceAll;