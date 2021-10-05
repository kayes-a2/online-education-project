//import componet's & css & external react node pakage
import React from 'react';

//footer component arrow function
const Footer = () => {

    return (
        //full footer part of html (jsx)

        <div className="bg-gray-400 p-20">
            <h2 className="text-2xl text-center mb-10 font-bold ">Learn the skills to drive your career</h2>
            <div className="  grid grid-cols-4">


                <div className="">
                    <h2 className="font-bold text-xl mb-3">Speech</h2>
                    <h2 className="">The Importance of Education and Skill Development for Economic Growth in the Information. Era. Charles R. Hulten. NBER Working Paper No. 24141</h2>
                </div>

                <div className="ml-36 ">
                    <h2 className="text-xl font-bold mb-3">Contact Us</h2>
                    <h2 className="">Call : 1-800-2690</h2>
                    <h2 className="">Plot : 3/B, 4th Floor, Rd 16/A, Dhanmondi</h2>
                    <h2 className="">Location : Dhaka,Bangladesh</h2>
                </div>
                <div className=" ml-32">
                    <h2 className="font-bold text-xl mb-3">Course</h2>
                    <h2>Skill's</h2>
                    <h2>SSC Special</h2>
                    <h2>HSC Special</h2>
                    <h2>Admission Test</h2>
                </div>
                <div className="text-xl ml-24 ">

                    <h2 className="font-bold mb-3">Social Media Link's</h2>

                    <div className="text-white mb-3">
                        <a className="text-blue-800 " href="https://www.facebook.com/k.kayesalazad/">facebook</a><br />
                        <a className="text-purple-800" href="https://www.instagram.com/kayes_a2/">instagram</a><br />
                        <a className=" text-blue-800" href="https://www.linkedin.com/in/kayes-al-azad-3b8579216/">linkedin</a><br />
                        <a className=" text-blue-600"
                            href="https://mobile.twitter.com/kayes_a2?fbclid=IwAR2E-w_qxej-o6_QWrbvZ_ADA4tJfnJYdB2IqA2GtzItJL9AEhqrvmKwKCw">twitter
                        </a>
                    </div>
                </div>
            </div>
            <p className="mt-10 text-center ">Copyright © Being Learner 2021</p>
        </div>


    );
};

//export footer component
export default Footer;