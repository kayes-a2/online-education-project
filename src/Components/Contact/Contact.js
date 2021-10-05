//import component & image  & external react node pakage
import React from 'react';
import image from "../../Images/images (6).jfif"

//contact component arrow function
const Contact = () => {
    return (
        //full contact part of html (jsx) 

        <div className=" text-6xl flex">
            <img className="w-6/12  m-4" src={image} alt="" />
            <div className="m-4 mt-5">
                <h2 className="text-3xl font-bold text-red-500 ">Learn the Skill's with Academic Education to Drive Your Career</h2>

                <h2 className="text-xl font-bold mt-4 text-indigo-500">Contact Us</h2>
                <h2 className="my-3 text-xl">Call: 1-800-2690</h2>
                <h2 className=" text-xl">Plot : 3/B, 4th Floor, Rd 16/A, Dhanmondi</h2>
                <h2 className="mb-5 text-xl">Location : Dhaka,Bangladesh</h2>


                <div className="text-xl ">
                    <h2 className="font-bold my-3">Social Media Link's</h2>
                    <div className="  text-blue-800">

                        <a className=" " href="https://www.facebook.com/k.kayesalazad/">facebook</a>
                        <a className="mx-4" href="https://www.instagram.com/kayes_a2/">instagram</a>
                        <a className="mx-4 " href="https://www.linkedin.com/in/kayes-al-azad-3b8579216/">linkedin</a>
                        <a className="mx-4" href="https://mobile.twitter.com/kayes_a2?fbclid=IwAR2E-w_qxej-o6_QWrbvZ_ADA4tJfnJYdB2IqA2GtzItJL9AEhqrvmKwKCw">twitter
                        </a>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </div>
    );
};

//export contact component
export default Contact;

