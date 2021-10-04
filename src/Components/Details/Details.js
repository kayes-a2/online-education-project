import React from 'react';
import UseService from '../../Hooks/Hook';

const Details = () => {
    const [courses, setCourses] = UseService()

    return (
        <div className="text-center text-6xl">
            <h1>Our Course's All Details Are Here</h1>
            <h2></h2>
        </div>
    );
};

export default Details;