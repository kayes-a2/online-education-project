import React from 'react';
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

                <h1><span className="property">Selection</span></h1>
                <h2>Added Devloper : {selection.length}</h2>
                <h2><span className="property">Cost </span> : ${totalSalary}</h2>

                <h3>My Devloper Team</h3>
            </div>

            <div>
                {
                    selection.map(devloper => <Member devloper={devloper}></Member>)
                }
            </div>
        </>
    );
};

export default Selection;