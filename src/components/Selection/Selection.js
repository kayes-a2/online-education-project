//import component & css file & external react node pakage
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Member from './Member/Member';
import "./Selection.css"

//selection arrow function
const Selection = (props) => {
    //destructuring of props
    const { selection } = props;

    let totalSalary = 0;
    //selection for of loop  
    for (const select of selection) {
        if (!select.quantity) {
            select.quantity = 1;
        }
        totalSalary = totalSalary + select.salary;

    }

    return (
        //selection part of html (jsx) & font awesome icon & member components 
        <>
            <div className="selection-cart">

                <h2><span className="property">Selection</span></h2>
                <h3>Added Devloper : {selection.length}</h3>
                <h1><span className="property">Cost </span> : ${totalSalary}</h1>

                <h3>My Devloper Team</h3>
                <hr />

                <div>
                    {
                        selection.map(devloper => <Member devloper={devloper}></Member>)
                    }
                </div>

                <button className="hire-button"><FontAwesomeIcon icon={faPlus} /> Hire Devloper</button>

            </div>


        </>
    );
};

//export default selection file
export default Selection;