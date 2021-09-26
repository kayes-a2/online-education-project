import React from 'react';
import './Member.css'

const Member = (props) => {
    const { devloper } = props;

    return (
        <div className="cart">
            <div>
                <img className="member-image" src={devloper.image} alt="" srcset="" />
                <h2><li>{devloper.name}</li></h2>
                <h3><li>{devloper.designation}</li></h3>

            </div>

        </div>
    );
};

export default Member;