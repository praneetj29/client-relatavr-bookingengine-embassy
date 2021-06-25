import React from 'react'
import './thankyou.css';
import Complete from './thankyou.png';

function Completed() {
    return (
        <div id="wrapper">
            <img id="doneimg" src={Complete} alt="Completed Illustration" />
            <h1> Its done 🥳🎊</h1>
        </div>
    )
}

export default Completed;
