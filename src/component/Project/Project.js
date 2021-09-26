import React, { useEffect, useState } from 'react';
import Devloper from '../Devloper/Devloper';
import Selection from '../Selection/Selection';

import './Project.css'

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [selection, setSelection] = useState([]);

    useEffect(() => {
        fetch('./fakedb.JSON')
            .then(res => res.json())
            .then(data => setProjects(data));

    }, []);

    const handleAddToDevloperCart = (project) => {

        if (selection.indexOf(project) === -1) {
            const newSelection = [...selection, project];
            setSelection(newSelection);
        }

    }


    return (
        <div className="projects-container">

            <div className="devloper-container">
                {
                    projects.map(project => <Devloper key={project.id} project={project} handleAddToDevloperCart={handleAddToDevloperCart} ></Devloper>)
                }
            </div>

            <div className="selecetion-container">
                <Selection selection={selection}></Selection>
            </div>

        </div>
    );
};

export default Project;