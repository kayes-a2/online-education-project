import React from 'react';
import { NavLink } from 'react-router-dom';
import UseService from '../../Hooks/Hook';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = UseService();

    const items = courses.filter(course => course.id < 5)
    console.log(items)

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
                <h4 className="text-2xl font-bold">Service :</h4>
                <h3 className=" text-3xl my-2 font-bold">Popular Topics To Learn</h3>


                <div className="grid grid-cols-2">

                    {
                        items.map(item => <Course key={item.id} item={item}></Course>)
                    }
                </div>
                <NavLink to="/course">
                    <button className=" text-2xl bg-black text-white rounded-lg p-1 my-4">View All</button>
                </NavLink>

            </div>

        </div>
    );
};

export default Home;