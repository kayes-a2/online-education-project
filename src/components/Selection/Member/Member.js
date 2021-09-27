//import css file external react file
import React from 'react';
import './Member.css'

//member arrpow function
const Member = (props) => {
    //destructuring of props
    const { devloper } = props;

    return (
        //member part of html (jsx)
        <>
            <div className="member">
                <div className="member">
                    <img className="member-image" src={devloper.image} alt="" srcset="" />
                    <div className="details">
                        <h4><li>{devloper.name}</li></h4>
                        <h5><li>{devloper.designation}</li></h5>
                    </div>
                </div>

            </div>
            <hr />
        </>
    );
};

//export default member file
export default Member;