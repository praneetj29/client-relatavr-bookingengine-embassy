import React,{useState} from 'react'
import FloorView2D from './floorplan.png';
import FloorView3D from './floorplan3d.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import './Detail.css';

function Detail({ToggleView , ViewDetails , setComplete , stepstatus}) {

    const [image, setimage] = useState(true);

    console.log(image);

    const changeStep = (step) => {
        setComplete({...stepstatus , [step] : true});
        ToggleView(step);
    }

    const setActive = value => {
        
        setimage(value);

        if(value)
        {
            document.querySelector('.floor3d').id = "selected";
            document.querySelector('.floor2d').id = "unselected";
        }
        else
        {
            document.querySelector('.floor3d').id = "unselected";
            document.querySelector('.floor2d').id = "selected";
        }
    }

    const downloadImage = value => {

        if(value)
        {
            return window.open("https://i.ibb.co/3Y2H6C0/floorplan3d.jpg", "_blank");
        }
        else
        {
            return window.open("https://i.ibb.co/gVyj3YG/floorplan.png", "_blank")
        }
    }
    
    return (
        <div id="main-div">
            
            <div id="upperinfo">
                <span id="detail-title">
                    <p> Detailed <b> Unit Floor Plan </b> </p>
                </span>
                <span>
                    <button id="⏪" onClick={() => ViewDetails(false)}> Previous </button>
                    <button id="⏩" onClick={() => changeStep("Step2")}> Continue </button>
                </span>
            </div>

            <div id="middleinfo">
                <button id="unselected" className="floor2d circle" onClick={() => setActive(false)}> 2D </button>
                <button id="selected" className="floor3d circle" onClick={() => setActive(true)}> 3D </button>
                <button id="DN" className="circle" onClick={() => downloadImage(image)}> <FontAwesomeIcon icon={faArrowDown} /> </button>
            </div>

            <div id="final-info">
                <img src={image ? FloorView3D : FloorView2D} alt="Floor Plan" />
            </div>
        </div>
    );
}


export default Detail
