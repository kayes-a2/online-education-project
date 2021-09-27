import React from 'react';
import './Member.css'

const Member = (props) => {
    const { devloper } = props;

    return (
        <div className="cart">
            <div className="member">
                <img className="member-image" src={devloper.image} alt="" srcset="" />
                <div className="details">
                    <h4><li>{devloper.name}</li></h4>
                    <h5><li>{devloper.designation}</li></h5>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Member;