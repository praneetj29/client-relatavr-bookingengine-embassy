import React,{useState , useEffect} from 'react'
import './App.css';
import Payment from './components/payment/Payment';
import PaymentScheme from './components/paymentscheme/PaymentScheme';
import CostSheet from './components/costsheet/costSheet';
import KYC from './components/kyc/kyc';
import Unit from './components/unit/unit';
import Details from './components/details/details';
import Agreement from './components/agreement/agreement';
import Login from './components/login/login';
import Thankyou from './components/thankyou/thankyou';
import Dashboard from './components/dashboard/dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import embassy from './embassy.png';
import { faBookOpen, faCalendar, faCreditCard, faFileAlt, faFileInvoice, faMap, faMapMarker, faVrCardboard } from '@fortawesome/free-solid-svg-icons'
function BookingForm() {

    const [active,setActive] = useState("Step1");
    const [steps, setsteps] = useState({
        Step1: true,
        Step2: false,
        Step3: false,
        Step4: false,
        Step5: false,
        Step6: false,
        Step7: false,
      });

    const TriggerComponent = (value) => {
        changeColor(value);
    }

    useEffect(() => {
        if(localStorage.getItem("mobileno") !== null || localStorage.getItem("password") !== null)
        {
            document.getElementById("loginbtn").innerText = "Logout";
        }
        else
        {
            document.getElementById("loginbtn").innerText = "Login";
        }
    });

    const navSteps = (Step) => {
        if(steps[Step])
        {
            setActive(Step);
        }
    }

    const changeColor = (step) => {   

        switch(step)
        {
            case "Step1" :  setActive(step);
                            break;

            case "Step2" :  document.querySelector('.cost').id = "cost";
                            document.querySelector('#step1tick').style.display = "inline-block";
                            setActive(step);
                            break;

            case "Step3" : if(localStorage.getItem("logged"))
                            {
                                document.querySelector('.schemes').id = "schemes";
                                document.querySelector('#step2tick').style.display = "inline-block";
                                setActive(step);
                            }
                            else
                            {
                                setActive("Login");
                            }
                            break;

            case "Step4" : if(localStorage.getItem("logged"))
                            {
                                document.querySelector('.form').id = "form";
                                document.querySelector('#step3tick').style.display = "inline-block";
                                setActive(step);
                            }
                            else
                            {
                                setActive("Login");
                            }
                            break;

            case "Step5" :  if(localStorage.getItem("logged"))
                            {
                                document.querySelector('.payment').id = "payment";
                                document.querySelector('#step4tick').style.display = "inline-block";
                                setActive(step);
                            }
                            else
                            {
                                setActive("Login");
                            }
                            break;
            
            case "Step6" : if(localStorage.getItem("logged"))
                            {
                                document.querySelector('.details').id = "details";
                                document.querySelector('#step5tick').style.display = "inline-block";
                                setActive(step);
                            }
                            else
                            {
                                setActive("Login");
                            }
                            break;
            
            case "Step7" : if(localStorage.getItem("logged"))
                            {
                                document.querySelector('.agreement').id = "agreement";
                                document.querySelector('#step6tick').style.display = "inline-block";
                                setActive(step);
                            }
                            else
                            {
                                setActive("Login");
                            }
                            break;
            
            case "Step8" : if(localStorage.getItem("logged"))
                            {
                                setActive(step);
                            }
                            else
                            {
                                setActive("Login");
                            }
                            break;

            default: console.log("Invalid Step");
                     break;
        }
    }

    const checkLogin = () => {
        if(localStorage.getItem("mobileno") !== null || localStorage.getItem("password") != null)
        {
            localStorage.clear()
            document.getElementById("loginbtn").innerText = "Login";
        }
        else
        {
            setActive("Login");
        }
    }

    return (
        <div>
        <nav className="navbar">
            <div className="maincontainer">
            <div id="leftitems">
                <div id="logo"> <img src={embassy} alt="Embassy Logo"/> </div>
                    <div className="unit" onClick={() => navSteps("Step1")}>
                        <div className="widgets_div">
                            <div className="icon_div">
                                <span><FontAwesomeIcon icon={faCreditCard} size={"1x"}/></span>
                            </div>
                            <div className="text_div">
                                <span><b>Select Unit</b></span>
                                <span className="stepname"><br/> STEP 1 <span id="step1tick">✔</span></span>
                            </div>
                        </div>

                    </div>

                    <div className="cost" onClick={() => navSteps("Step2")}> 
                        <div className="widgets_div">
                            <div className="icon_div">
                            <FontAwesomeIcon icon={faFileAlt} size={"1x"}/>
                            </div>
                            <div className="text_div">
                                <span><b>Cost Sheet</b></span>
                                <span className="stepname"><br/> STEP 2 <span id="step2tick">✔</span></span>
                            </div>
                        </div>
                    </div>


                    <div className="schemes" onClick={() => navSteps("Step3")}>
                        <div className="widgets_div">
                            <div className="icon_div">
                            <FontAwesomeIcon icon={faCalendar} size={"1x"}/>
                            </div>
                            <div className="text_div">
                                <span><b>Schemes</b></span>
                                <span className="stepname"><br/> STEP 3 <span id="step3tick">✔</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="form">
                        <div className="widgets_div" onClick={() => navSteps("Step4")}>
                            <div className="icon_div">
                            <FontAwesomeIcon icon={faFileInvoice} size={"1x"}/>
                            </div>
                            <div className="text_div">
                                <span><b>Form</b></span>
                                <span className="stepname"><br/> STEP 4 <span id="step4tick">✔</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="payment">
                        <div className="widgets_div" onClick={() => navSteps("Step5")}>
                            <div className="icon_div">
                            <FontAwesomeIcon icon={faCreditCard} size={"1x"}/>
                            </div>
                            <div className="text_div">
                                <span><b>Payment</b></span>
                                <span className="stepname"><br/> STEP 5 <span id="step5tick">✔</span></span>
                            </div>
                        </div>  
                    </div>

                    <div className="details"> 
                        <div className="widgets_div" onClick={() => navSteps("Step6")}>
                            <div className="icon_div">
                            <FontAwesomeIcon icon={faCreditCard} size={"1x"}/>
                            </div>
                            <div className="text_div">
                                <span><b>Details</b></span>
                                <span className="stepname"><br/> STEP 6 <span id="step6tick">✔</span></span>
                            </div>
                        </div>  
                    </div>

                    <div className="agreement"> 
                        <div className="widgets_div" onClick={() => navSteps("Step7")}>
                            <div className="icon_div">
                            <FontAwesomeIcon icon={faCreditCard} size={"1x"}/>
                            </div>
                            <div className="text_div">
                                <span><b>Agreement</b></span>
                                <span className="stepname"><br/> STEP 7 <span id="step7tick">✔</span></span>
                            </div>
                        </div>  
                    </div>
                </div>
                
                <div id="rightitems">
                    <div id="iconbutton"> 
                        <div className="widgets_div" onClick={() => setActive("Dashboard")}>
                                <button id="dashboardbtn"> Dashboard </button>
                        </div> 
                    </div>

                    <div id="iconbutton"> 
                        <div className="widgets_div" onClick={checkLogin}>
                                <button id="loginbtn"> Login </button>
                        </div> 
                    </div>

                    <div id="bookingamt"> Booking Amount <br/> <b> ₹ 96,59,999</b></div>
                </div>
            </div>
        </nav>

            <div className="content">
            <div id="Sidebuttons">
                <button id="map"> <FontAwesomeIcon icon={faMap} size={"1x"}/> &nbsp; Map </button>
                <button id="brochure"> <FontAwesomeIcon icon={faBookOpen} size={"1x"}/> &nbsp; Brochure </button>
                <button id="visit"> <FontAwesomeIcon icon={faMapMarker} size={"1x"}/> &nbsp; Site Visit </button>
                <button id="FYOC"> <FontAwesomeIcon icon={faVrCardboard} size={"1x"}/> &nbsp; FOYC </button>
            </div>
                {active === "Step1" && <Unit ToggleCurrentView={TriggerComponent} setCompletion={setsteps} status={steps}/>}
                {active === "Step2" && <CostSheet ToggleCurrentView={TriggerComponent} setCompletion={setsteps} status={steps}/>}
                {active === "Step3" && <PaymentScheme ToggleCurrentView={TriggerComponent} setCompletion={setsteps} status={steps}/>}
                {active === "Step4" && <KYC ToggleCurrentView={TriggerComponent} setCompletion={setsteps} status={steps}/>}
                {active === "Step5" && <Payment ToggleCurrentView={TriggerComponent} setCompletion={setsteps} status={steps}/>}
                {active === "Step6" && <Details ToggleCurrentView={TriggerComponent} setCompletion={setsteps} status={steps}/>}
                {active === "Step7" && <Agreement ToggleCurrentView={TriggerComponent} setCompletion={setsteps} status={steps}/>}
                {active === "Step8" && <Thankyou />}
                {active === "Login" && <Login />}
                {active === "Dashboard" && <Dashboard ToggleCurrentView={TriggerComponent}/>}
            </div>

        </div>
    )
}

export default BookingForm;