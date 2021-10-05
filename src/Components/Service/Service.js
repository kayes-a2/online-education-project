//import component's & custom hook & external react node pakage 
import React from 'react';
import UseService from '../../Hooks/Hook';
import ServiceAll from '../ServiceAll/ServiceAll';

//service component arrow function
const Service = () => {

    //using custom hook
    const [courses, setCourses] = UseService()

    return (
        //full service part of html (jsx) and inside of service ServiceAll component data pass
        <div>
            <h2 className="text-center text-3xl font-bold my-4 text-indigo-400 mt-7">Our All Course's</h2>
            <div className="text-center grid grid-cols-3">

                {
                    courses.map(course => <ServiceAll key={course.id} course={course}></ServiceAll>)
                }
            </div>
        </div>
    );
};

//export service component
export default Service;