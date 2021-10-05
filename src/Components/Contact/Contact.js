import React from 'react';
import image from "../../Images/images (6).jfif"

const Contact = () => {
    return (
        <div className=" text-6xl flex">
            <img className="w-6/12  m-4" src={image} alt="" />
            <div className="m-4 mt-5">
                <h2 className="text-3xl font-bold text-red-500 ">Learn the Skill's with Academic Education to Drive Your Career</h2>

                <h2 className="text-xl font-bold mt-4">Contact Us</h2>
                <h2 className="mt-3 text-xl">Call: 1-800-2690</h2>


                <div className="text-xl ">
                    <div className="  text-blue-800">

                        <a className=" " href="https://www.facebook.com/k.kayesalazad/">facebook</a>
                        <a className="mx-4" href="https://www.instagram.com/kayes_a2/">instagram</a>
                        <a className="mx-4 " href="https://www.linkedin.com/in/kayes-al-azad-3b8579216/">linkedin</a>
                        <a className="mx-4" href="https://mobile.twitter.com/kayes_a2?fbclid=IwAR2E-w_qxej-o6_QWrbvZ_ADA4tJfnJYdB2IqA2GtzItJL9AEhqrvmKwKCw">twitter
                        </a>
                    </div>
                    <div>
                        <h2 className=" text-xl">Location : Dhaka,Bangladesh</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;

