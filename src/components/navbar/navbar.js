import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className="maincontainer">
            <div id="leftitems">
                <div id="logo"> Logo Section </div>

                    <div id="unit"> 
                        <div className="widgets_div">
                            <div class="icon_div">
                                <span><img className="mdc-button__icon" src="https://img.icons8.com/fluent-systems-regular/24/000000/bed.png" alt="Select Unit"/></span>
                            </div>
                            <div class="text_div">
                                <span><b>Select Unit</b></span>
                                <span><br/> STEP 1</span>
                            </div>
                        </div>
                    </div>

                    <div id="cost"> 
                        <div className="widgets_div">
                            <div class="icon_div">
                                <img src="https://img.icons8.com/android/24/000000/money.png" alt=""/>
                            </div>
                            <div class="text_div">
                                <b>Cost Sheet</b> <br/> STEP 2
                            </div>
                        </div>
                    </div>


                    <div id="schemes">
                        <div className="widgets_div">
                            <div class="icon_div">
                                <img src="https://img.icons8.com/material-sharp/24/000000/calendar--v1.png" alt=""/>
                            </div>
                            <div class="text_div">
                                <b>Schemes</b> <br/> STEP 3
                            </div>
                        </div>
                    </div>

                    <div id="form">
                        <div className="widgets_div">
                            <div class="icon_div">
                                <img src="https://img.icons8.com/windows/32/000000/overview-pages-1.png" alt=""/> 
                            </div>
                            <div class="text_div">
                                <b>Form</b> <br/> STEP 4
                            </div>
                        </div>
                    </div>

                    <div id="payment">
                        <div className="widgets_div">
                            <div class="icon_div">
                                <img src="https://img.icons8.com/material-outlined/24/000000/bank-card-back-side.png" alt=""/> 
                            </div>
                            <div class="text_div">
                                <b>Payment</b> <br/> STEP 5
                            </div>
                        </div>  
                    </div>

                    <div id="agreement"> 
                        <div className="widgets_div">
                            <div class="icon_div">
                                <img src="https://img.icons8.com/windows/32/000000/agreement-new.png" alt=""/>
                            </div>
                            <div class="text_div">
                                <b>Agreement</b> <br/> STEP 6
                            </div>
                        </div>  
                    </div>
                </div>
                <div id="rightitems">

                    <div id="iconbutton"> 
                        <div className="widgets_div">
                            <div class="icon_div">
                                <img src="https://img.icons8.com/material-outlined/24/000000/bank-card-back-side.png" alt=""/> 
                            </div>
                            <div class="text_div">
                                <b>Login</b>
                            </div>
                        </div> 
                    </div>

                    <div id="iconbutton"> 
                        <div className="widgets_div">
                            <div class="icon_div">
                            <img src="https://img.icons8.com/ios-filled/25/000000/next-location.png" alt=""/>
                            </div>
                            <div class="text_div">
                                <b>Site Visit</b>
                            </div>
                        </div> 
                    </div>
                    <div id="bookingamt"> Booking Amount <br/> <b> ₹ 96,59,999</b></div>
                </div>
            </div>
    )
}

export default Navbar
