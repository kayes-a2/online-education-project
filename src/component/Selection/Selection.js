import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Member from './Member/Member';
import "./Selection.css"

const Selection = (props) => {
    const { selection } = props;

    let totalSalary = 0;

    for (const select of selection) {
        if (!select.quantity) {
            select.quantity = 1;
        }
        totalSalary = totalSalary + select.salary;

    }

    return (
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

export default Selection;