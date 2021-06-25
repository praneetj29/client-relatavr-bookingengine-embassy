import React from 'react'
import { getCostSheet } from '../../api';
import './costSheet.css';

function CostSheet({ToggleCurrentView}) {

    const costSheetData = getCostSheet("projectId");

    const CostsheetList = props  => {
      
        let titles = props.titles;
        let values = props.values;

        const titlesdata = titles.map(title => <p>{title}</p>); 
        const valuesdata = values.map(values => <p>{values}</p>); 
        const finalamt = valuesdata[values.length-1];

        return (
            <div id="costsection">

                <div id="costbreakdown">
                        <span id="titles">{titlesdata}</span>
                        <span id="values">{valuesdata}</span>
                </div>
                <hr/>
                            <span id="total">
                                <b> All Inclusive Total (excluding registration charges) </b>
                                <b id="mainamount"> {finalamt}</b>
                            </span>
            </div>
        )
    }

    return (
        <div>

            {/* Payment Scheme Component*/}
            <div className="maincontent">

                <div id="title">
                    <h2> Cost Sheet </h2>
                    <span>
                        <button id="previous" onClick={() => ToggleCurrentView("Step 1")}> PREVIOUS </button>
                        <button id="continue" onClick={() => ToggleCurrentView("Step 3")}> CONTINUE </button>
                    </span>
                </div>
                            <span id="sectionelements">
                                <span id="subheadings"> Summary </span>
                                <img className="download_icon" 
                                onClick={() => window.open("https://smallpdf.com/shared#st=b01636da-ec59-4656-9108-25a030b0df84&fn=Demo-Summary.pdf&ct=1616750169645&tl=share-document&rf=link", "_blank")}
                                src={"https://img.icons8.com/cotton/64/000000/download.png"} alt="download payment summary"/>
                            </span>

                                {costSheetData.CostSheet.map(filter => (
                                    <CostsheetList titles={filter.titles} values={filter.values}/>
                                ))}

                        <span id="sectionelements">
                            <span id="subheadings"> Cost Break Up </span>
                            <img className="download_icon" 
                            onClick={() => window.open("https://smallpdf.com/shared#st=b01636da-ec59-4656-9108-25a030b0df84&fn=Demo-Summary.pdf&ct=1616750169645&tl=share-document&rf=link", "_blank")}
                            src={"https://img.icons8.com/cotton/64/000000/download.png"} alt="download payment summary"/>
                        </span>

                                {costSheetData.CostBreakUp.map(filter => (
                                    <CostsheetList titles={filter.titles} values={filter.values}/>
                                ))}

            </div>
        </div>
    )
}

export default CostSheet;