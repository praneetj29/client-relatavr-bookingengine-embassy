import React from 'react'
import './dashboard.css';

function Dashboard({ToggleCurrentView}) {

    return (
        <div id="maindashboard">
            
            <div id="dashwrapper">

                <div id="dashupperbar">
                    <h1> Dashboard </h1>
                    <button> EXPLORE UNITS </button>
                </div>

                <p id="tagline"> Now do more with the solution. Book <br/> your dream home for 72 hours </p>
                
                <div id="bookedtime">
                
                    <span className="bookedrow">
                        <b>Your dream home is waiting to be booked</b>
                        <p>Daisy A-1032 2BHK - 3T - c1 - BW </p>
                    </span>

                    <span className="bookedrow">
                        <p id="timeleft">23:05:30</p>
                        <b id="booknow">Book Now</b>
                    </span>
                </div>

                <div id="buyerdetails">

                    <span id="statusdetails">
                        <b> Daisy A12 </b>
                        <p> Roshan Sharma </p>
                        <p> Payment Status : Incomplete </p>
                        <p> Booking Status : Incomplete </p>
                    </span>

                    <span> <b id="continuebuying">Continue</b> where you left off</span>
                </div>

                
                <div id="finaldetails">

                    <div className="dashcustomerinfo">
                        <span id="statusdetails">
                            <b> Roshan Sharma </b>
                            <p> Dasiy A-12 </p>
                            <p> Payment Status : Incomplete </p>
                            <p> Booking Status : Incomplete </p>
                        </span>

                        <span className="finaldetailvalues" id="statusdetails">
                            <p> View Profile </p>
                            <p> +91 8983 687 414 </p>
                            <p> rahulsharma@gmail.com </p>
                            <p> Download Invoice </p>
                        </span>
                    </div>
                    <hr/>
                    <div className="dashcustomerinfo">
                        <span id="flatstatusdetails">
                            <p> Unit No : </p>
                            <p> Super Built Up Area </p>
                            <p> Tower and Block </p>
                            <p> Floor </p>
                            <p> Configuration </p>
                            <p> Carpet Area </p>
                            <p> Agreement Cost </p>
                        </span>

                        <span className="finaldetailvalues" id="flatstatusdetails">
                            <b> Daisy - A1302 3BHK </b><br/>
                            <b> 1406.1 Sq.Ft </b><br/>
                            <b> Dasiy A </b><br/>
                            <b> 13th Floor </b><br/>
                            <b> 3 BHK - 3T - C1 - BW </b><br/>
                            <b> 911.8 Sq.Ft. </b><br/>
                            <b> ₹89,57,349 </b><br/>
                        </span>
                    </div>
                    <hr/>
                    <div id="finalamount">
                        <b>All Inclusive total (excluding registration charges)</b>
                        <b> ₹96,56,236 </b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
