import React,{useState, useEffect} from 'react'
import './FloorSelection.css';

function FloorSelection({ToggleDetailView}) {

    const [FloorNo,setFloorNo] = useState(null); 
    const [selectunit,setselectunit] = useState(true);

    useEffect((e) => {
        // do something when startDate updates
        console.log("Floor value changed to : "+FloorNo);
        }, [FloorNo]);

    const selectUnit = (e) => {

        console.log(e.currentTarget.value);

        if(FloorNo === null)
        {
            let selectedID = document.querySelector(`#${e.target.value}`);
            selectedID.style.backgroundColor = "#88975B";

            console.log("ID value : " + e.target.value);
            setFloorNo(e.target.value);
            console.log("Selected Unit : " + FloorNo);
            setselectunit(false);
            
        }
        else
        {
            let selectedID = document.querySelector(`#${FloorNo}`);
            selectedID.style.backgroundColor = "#f5f5f5";

            selectedID = document.querySelector(`#${e.target.value}`);
            selectedID.style.backgroundColor = "#88975B";

            setFloorNo(e.target.value);
            console.log("Selected Unit : " + FloorNo);
        }
    }


    return (
        <div id="popup-wrapper">
            <div id="popup-main">
                <div id="unitinfoside">
                    <h3 className="modaltitles"> Unit Information </h3>
                    <p className="modaltitles"> Daisy </p>

                    <h3 className="greentitles"> Daisy - A1202 </h3>
                    <p className="greentitles"> Unit Name </p>

                    <h3 className="greentitles"> Daisy - A </h3>
                    <p className="greentitles"> Block Name </p>

                    <h3 className="greentitles"> 3 BHK - 3T - C1 </h3>
                    <p className="greentitles"> Unit Type </p>

                    <h3 className="greentitles"> 1354.3 Sq.Ft </h3>
                    <p className="greentitles"> Super Built-Up Area </p>

                    <h3 className="greentitles"> 911.80 Sq.Ft. </h3>
                    <p className="greentitles"> Carpet Area </p>

                    <h3 className="greentitles"> Courtyard Facing </h3>
                    <p className="greentitles"> Unit Name </p>

                    <button id="selectunitbtn" disabled={selectunit} onClick={() => ToggleDetailView("Detail")}> Select This Unit </button>
                </div>

                <div className="vl"></div>

                <div> 
                    <h3 className="modaltitles"> Select Floor </h3>
                    <p className="modaltitles"> Daisy </p>

                    <div id="floorbtns">
                        <button className="white" id="A12" value="A12" onClick={e => selectUnit(e, "value")}></button> <span> A12 </span>
                        <button className="white" id="A13" value="A13" onClick={e => selectUnit(e, "value")}></button> <span> A13 </span>
                    </div>
            
                    <div id="floorbtns">
                        <button className="white" id="A16" value="A16" onClick={e => selectUnit(e, "value")}></button> <span> A16 </span>
                        <button className="white" id="A17" value="A17" onClick={e => selectUnit(e, "value")}></button> <span> A17 </span>
                    </div>

                    <div id="floorbtns">
                        <button className="white" id="A18" value="A18" onClick={e => selectUnit(e, "value")}></button> <span> A18 </span>
                        <button className="white" id="A19" value="A19" onClick={e => selectUnit(e, "value")}></button> <span> A19 </span>
                    </div>
                
                    <div id="floorbtns">
                        <button className="white" id="A22" value="A22" onClick={e => selectUnit(e, "value")}></button> <span> A22 </span>
                        <button className="white" id="A23" value="A23" onClick={e => selectUnit(e, "value")}></button> <span> A23 </span>
                    </div>

                    <hr/>
                        <button className="indexbtns white"> </button> <span> Available </span> <br/>
                        <button className="indexbtns green"> </button> <span> Selected </span> <br/>
                </div>
            </div>
        </div>
    )
}

export default FloorSelection
