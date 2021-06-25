import React,{useEffect} from 'react'
import './Payment.css';

function Payment({ToggleCurrentView , setCompletion , status}) {

    useEffect(() => {
        document.title = ("MatchBox | Step 5");
    });

    const changeStep = (step) => {
        setCompletion({...status , [step] : true});
        ToggleCurrentView(step);
    }
    
    const validate = (step) => {

        //Payment Validation comes here

        let paymentconfirm = true;
        if(paymentconfirm)
        {
            changeStep(step);
        }
        else
        {
            // Code here if payment fails
        }

    }
    return (
<div>

    {/* Payment Scheme Component*/}
    <div className="mainsection">

        <div>
            <h2 id="paymentheading"> Payment </h2>

                <span>
                    <p id="subbheading"> Select Payment Method </p>
                </span>
    
            <div id="paymentcontainer">

                    <span className="elements">
                        <button id="creditcard"> Credit Card </button>
                        <button id="banktrans"> Bank Transfer </button>
                        <button id="upi"> GPay </button>
                    </span>

                        <span className="elements">
                            <span class="carddetails">
                                <p> NAME ON CARD </p>
                                <input type="text" className="cardinfo" />
                            </span>
                        </span>

                    <span className="elements">
                        <span class="carddetails">
                            <p> CARD NUMBER </p>
                            <input type="text" className="cardinfo"/>
                        </span>
                    </span>

                    <span>
                        <div id="othercarddetails">
                            <span class="maindetails">
                                <p> Month </p>
                                <select>
                                    <option value="01">01</option>
                                </select>
                            </span>

                            <span class="maindetails">
                                    <p> Year </p>
                                    <select>
                                        <option value="2020">2020</option>
                                    </select>
                            </span>

                            <span class="maindetails">
                                    <p> CVV </p>
                                    <input type="text" id="cvv" placeholder="Enter CVV"/>
                            </span>
                        </div>

                        <div id="paymentbuttons">
                            <button id="cancelpayment" onClick= {()=> ToggleCurrentView("Step4")}> CANCEL </button>
                            <button id="paynow" onClick={() => validate("Step6")}> PAY NOW </button>
                        </div>
                    </span>
                    
            </div>
        </div>

            <div id="summaryysection">
                <span className="section_elements">
                    <p id="subbheading"> Summary </p>
                </span>

                <div id="summaryycontainer">

                    <div className="itemstitle">
                        <p> Flat No: </p>
                        <p> Floor </p>
                        <p> Carpet Area </p>
                    </div>

                    <div className="itemsvalue">
                        <p><b> Daisy - A1302 3BHK - 3T - C1 - BW </b></p>
                        <p><b> 13th Floor </b></p>
                        <p><b> 911.8 Sq.Ft.</b></p>
                    </div>
                </div>
            </div>
    </div>
</div>
    )
}

export default Payment;