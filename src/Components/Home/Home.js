import React from 'react';

const Home = () => {
    return (
        <div className="">
            <div className="flex">
                {/* <img className="w-5/5" src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/03/slider-image1.jpg" alt="" srcset="" /> */}

            </div>

            <div className="grid grid-cols-2	">
                <div>
                    <img className="m-3" src="https://www.cedefop.europa.eu/files/images/headline_coronavirus_interest_online_learning_002.jpg" alt="" srcset="" />
                </div>

                <div className="mt-8 m-3">
                    <h3 className="background-img text-red-500 text-3xl  ">The Leader in Online Learning
                    </h3>

                    <h1 className="text-6xl my-5">Learn the Skills you Need to Succeed</h1>

                    <p className="">Solve tasks and check the results right away. Courses
                        so easy it is impossible not to understand.</p>
                </div>

            </div>
        </div >
    );
};

export default Home;