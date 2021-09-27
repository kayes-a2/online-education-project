//import component & css file & external react node pakage
import React, { useEffect, useState } from 'react';
import Devloper from '../Devloper/Devloper';
import Selection from '../Selection/Selection';
import './Project.css'

//project arrow function
const Project = () => {
    //state for state changing
    const [projects, setProjects] = useState([]);
    const [selection, setSelection] = useState([]);

    //state of useEffect (sideEffect for external data load )
    useEffect(() => {
        //fetch for load data from public folder
        fetch('./fakedb.JSON')
            .then(res => res.json())
            .then(data => setProjects(data));

    }, []);

    // event handeler function
    const handleAddToDevloperCart = (project) => {

        //conditon for single data pass by click
        if (selection.indexOf(project) === -1) {
            const newSelection = [...selection, project];
            setSelection(newSelection);
        }

    }


    return (
        //full project part of html (jsx) and inside of project (devloper & selection)
        <div className="project-container">

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

//export default project file
export default Project;