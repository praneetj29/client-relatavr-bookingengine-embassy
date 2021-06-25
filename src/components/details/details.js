import React,{useState , useEffect} from 'react'
import Communication from './steps/communication';
import Documents from './steps/documents';
import Others from './steps/others';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faInfoCircle, faPhone, } from "@fortawesome/free-solid-svg-icons";
import './details.css';

function Details({ToggleCurrentView , setCompletion , status}) {

    useEffect(() => {
        document.title = ("MatchBox | Step 6");
    });

    const [Active,setActive] = useState("Step 1");

    const changeStep = (step) => {
        setCompletion({...status , [step] : true});
        ToggleCurrentView(step);
    }

    const PreviousView = () => {
        switch(Active){
            case "Step 1" : changeStep("Step5");
                            break;

            case "Step 2" : setActive("Step 1");
                            break;

            case "Step 3" : setActive("Step 2");
                            break;

            default : console.log("Default Case");
        }
    }

    const NextView = () => {
        switch(Active){
            case "Step 3" : changeStep("Step7");
                            break;

            case "Step 2" : setActive("Step 3");
                            break;

            case "Step 1" : setActive("Step 2");
                            break;

            default : console.log("Default Case");
        }
    }

    return (
            <div id="detailsparent">
                <h1> Fill in Your Details </h1>
                <div id="detailselements">
                    <span id="communication" onClick={() => setActive("Step 1")}> <FontAwesomeIcon icon={faPhone} size={"1x"}/><br/>Communication Info </span>
                    <span id="docs" onClick={() => setActive("Step 2")}> <FontAwesomeIcon icon={faFile} size={"1x"}/><br/>Documents </span>
                    <span id="others" onClick={() => setActive("Step 3")}> <FontAwesomeIcon icon={faInfoCircle} size={"1x"}/><br/>Other Info </span>
                </div>

                <div className="content">
                    {Active === "Step 1" && <Communication />}
                    {Active === "Step 2" && <Documents />}
                    {Active === "Step 3" && <Others />}
                </div>
  
                <div id="detailsnav">
                    <button id="detailsnavprev" onClick={PreviousView}> PREVIOUS </button>
                    <button id="detailsnavnext" onClick={NextView}> NEXT </button>
                </div>
            </div>
    )
}

export default Details
