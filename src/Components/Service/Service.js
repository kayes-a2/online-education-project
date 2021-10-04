import React from 'react';
import UseService from '../../Hooks/Hook';
import ServiceAll from '../ServiceAll/ServiceAll';

const Service = () => {
    const [courses, setCourses] = UseService()
    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-4"> Al Service's Here</h2>
            <div className="text-center grid grid-cols-3">

                {
                    courses.map(course => <ServiceAll key={course.id} course={course}></ServiceAll>)
                }
            </div>
        </div>
    );
};

export default Service;