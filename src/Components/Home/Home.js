//import component's & react external node pakage
import React from 'react';
import { NavLink } from 'react-router-dom';
import UseService from '../../Hooks/Hook';
import Course from '../Course/Course';

//home component arrow functon 
const Home = () => {
    //custom hook 
    const [courses, setCourses] = UseService();

    //using filter into an array
    const items = courses.filter(course => course.id < 5)


    return (
        //full home part of html (jsx) and inside of home course component data pass

        <div className="">
            <div className="grid grid-cols-2 mb-6 	">
                <div>
                    <img className="m-3" src="https://www.cedefop.europa.eu/files/images/headline_coronavirus_interest_online_learning_002.jpg" alt="" srcset="" />
                </div>

                <div className="mt-8 m-3 ">
                    <h3 className=" text-red-400 font-bold text-3xl  ">The Leader in Online Learning
                    </h3>

                    <h1 className="text-6xl font-bold my-5 text-green-600">Learn the Skill's you Need to Succeed</h1>

                    <p className="text-xl text-gray-500">Solve tasks and check the results right away. Courses
                        so easy it is impossible not to understand.</p>
                </div>


            </div>


            <div className="text-center ">
                <hr className="border-4" />
                <h4 className="text-5xl font-bold mb-10 mt-8 text-indigo-500">Popular Course's To Learn</h4>

                <div className="grid grid-cols-2">

                    {
                        items.map(item => <Course key={item.id} item={item}></Course>)
                    }
                </div>

                <NavLink to="/course">
                    <button className=" text-xl bg-black text-white rounded-lg p-1 my-4">View All</button>
                </NavLink>

            </div>

        </div>
    );
};

//export home component
export default Home;