import React from 'react';
import UseService from '../../Hooks/Hook';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = UseService();
    // const { image, name, price, access } = courses
    return (
        <div className="">
            <div className="grid grid-cols-2 mb-6	">
                <div>
                    <img className="m-3" src="https://www.cedefop.europa.eu/files/images/headline_coronavirus_interest_online_learning_002.jpg" alt="" srcset="" />
                </div>

                <div className="mt-8 m-3">
                    <h3 className="background-img text-red-500 text-3xl  ">The Leader in Online Learning
                    </h3>

                    <h1 className="text-6xl my-5">Learn the Skills you Need to Succeed</h1>

                    <p className="text-xl">Solve tasks and check the results right away. Courses
                        so easy it is impossible not to understand.</p>
                </div>

            </div>

            <div className="text-center ">
                <h4 className="text-2xl">Service :</h4>
                <h3 className=" text-3xl my-2">Popular Topics To Learn</h3>


                <div className="grid grid-cols-3">

                    {
                        courses.map(course => <Course key={courses.id} course={course}></Course>)
                    }
                </div>



            </div>
        </div >
    );
};

export default Home;