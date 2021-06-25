import React, {Fragment , useState , useEffect} from "react";
import {getPaymentSchemes} from './../../api';
import "./PaymentScheme.css";

function PaymentScheme({ToggleCurrentView , setCompletion , status})
{

    const [schemeType, setSchemeType] = useState("Default");

    useEffect(() => {
        document.title = ("MatchBox | Step 3");
    });
    
    const paymentSchemeData = getPaymentSchemes("projectid");

    const changeStep = (step) => {
        setCompletion({...status , [step] : true});
        ToggleCurrentView(step);
    }

    const defaultkeys = paymentSchemeData['Default'].map(d => Object.keys(d));
    const defaultvalues = paymentSchemeData['Default'].map(d => Object.values(d));

    const OptionsList = () => {

        const elements = [];

        for(const item in paymentSchemeData){
            elements.push(item);
        }

        const listdata = elements.map(e => <option>{e}</option>);

        const data = elements.map(e => <section key={e} value={e}>{e}</section>);
        console.log(data);
        return (
            <div>
                <select id="options" onChange={(e) => setSchemeType(e.target.value)} value={schemeType}>
                    {listdata}
                </select>
            </div>);
    }

  function schemeSelection(){
        return(
            <div>
                <div id="maincontent">
                        <h2 id="paymenttitle"> Payment Scheme </h2>
                        
                        <div id="paymentcontroller">
                            <OptionsList />
                            
                            <span>
                                <button id="pmtprevious" onClick={() => alert("Test Message : Unit Blocked ✔")}> BLOCK UNIT </button>
                                <button id="pmtprevious" onClick={() => ToggleCurrentView("Step2")}> PREVIOUS </button>
                                <button id="pmtcontinue" onClick={() => changeStep("Step4")}> CONTINUE </button>
                            </span>
                        </div>
                </div>
            </div>)
    }

    function renderSelectedCard(selectedCardType){
        if(selectedCardType !== "Default")
        return <Partial breakdown={selectedCardType}/>;
        else
        return <Default />;
    }

    //Default Component
    function Default({ToggleCurrentView}) {
        
        const PaymentSchemeList = props => {
            
            let titles = props.titles;
            let values = props.values;
    
            const titlesdata = titles.map(title => <p>{title}</p>); 
            const valuesdata = values.map(values => <p>{values}</p>); 
            const finalamt = valuesdata[values.length-1];

            return(
                <div id="paymentsection">
                    <div id="paymentbreakdown">
                        <span id="titles"> 
                            {titlesdata}
                        </span>
                        <span id="values"> 
                            {valuesdata}
                        </span>
                    </div>
                    <hr/>
                    <span id="paymenttotal">
                        <b> All Inclusive Total (excluding registration charges) </b>
                        <b id="paymentmainamount"> {finalamt} </b>
                    </span>
                </div>
            )
        }

        return (
            <div>
                    <div id="firstdiv">
                        <span id="sectionelement">
                            <span id="subheading"> Summary </span>
                            <img className="download_icon" 
                            onClick={() => window.open("https://smallpdf.com/shared#st=b01636da-ec59-4656-9108-25a030b0df84&fn=Demo-Summary.pdf&ct=1616750169645&tl=share-document&rf=link", "_blank")}
                            src={"https://img.icons8.com/cotton/64/000000/download.png"} alt="download payment summary"/>
                        </span>
                        <PaymentSchemeList titles={defaultkeys} values={defaultvalues}/>
                    </div>
            </div>
        )
    }

    //Partial Component
    function Partial({breakdown}) {

        const data = {
            "On Booking": [
              "20%",
              "₹10,00,000",
              "₹5,00,151",
              "₹10,56,555",
              "₹80,568",
              "₹16,56,888"
            ],
            "On Posession": [
              "80%",
              "₹10,00,000",
              "₹5,00,151",
              "₹10,56,555",
              "₹80,568",
              "₹16,56,888"
            ],
            "On Posession Additional Deposists": ["", "", "", "", "", "₹15,22,000"],
            "Total Value Including Abetments": ["", "", "", "", "", "₹15,22,000"]
          };

        const breakdownkeys = paymentSchemeData[breakdown].map(d => Object.keys(d));
        const breakdownvalues = paymentSchemeData[breakdown].map(d => Object.values(d));

        const PaymentSchemeList = props => {

            return(
                // <div id="paymentsection">
                //     <div id="paymentbreakdown">
                //         <span id="titles"> 
                //             {titlesdata}
                //         </span>
                //         <span id="values"> 
                //             {valuesdata}
                //         </span>
                //     </div>
                //     <hr/>
                //     <span id="paymenttotal">
                //         <b> All Inclusive Total (excluding registration charges) </b>
                //         <b id="paymentmainamount"> {finalamt} </b>
                //     </span>
                // </div>
                <table id="paymentsection" className="tabularpayment">
                <tr>
                  <th>Milestone</th>
                  <th>%</th>
                  <th>TOTAL VALUE OF PROPERTY</th>
                  <th>ABETMENT (1/3rd) OF THE VALUE</th>
                  <th>NET TAX PAYABLE AMOUNT</th>
                  <th>GST (7.5%) (₹)</th>
                  <th>Total Value (₹)</th>
                </tr>
        
                <tr >
                  <td className="lefttitle">On Booking</td>
                  {data["On Booking"].map((e) => (
                    <td className="centertd">{e}</td>
                  ))}
                </tr>
                <tr>
                  <td className="lefttitle">On Posession</td>
                  {data["On Posession"].map((e) => (
                    <td className="centertd">{e}</td>
                  ))}
                </tr>
                <tr>
                  <td className="lefttitle">On Posession Additional Deposists</td>
                  {data["On Posession Additional Deposists"].map((e) => (
                    <td className="centertd">{e}</td>
                  ))}
                </tr>
                <tr>
                  <td className="lefttitle">Total Value Including Abetments</td>
                  {data["Total Value Including Abetments"].map((e) => (
                    <td className="centertd">{e}</td>
                  ))}
                </tr>
              </table>
            )
        }

        return (
                    <div>
                        <div id="firstdiv">
                            <span id="sectionelement">
                                <span id="subheading"> {breakdown} </span>
                                <img className="download_icon" 
                                onClick={() => window.open("https://smallpdf.com/shared#st=b01636da-ec59-4656-9108-25a030b0df84&fn=Demo-Summary.pdf&ct=1616750169645&tl=share-document&rf=link", "_blank")}
                                src={"https://img.icons8.com/cotton/30/000000/download.png"} alt="download payment summary"/>
                            </span>
                            <PaymentSchemeList titles={breakdownkeys} values={breakdownvalues}/>
                        </div>
                        <Default/>
                    </div>

        )
    }


    return(
      <Fragment>
          {schemeSelection()}
          <div id="maincontent">
            {renderSelectedCard(schemeType)}
          </div>
      </Fragment>
    );
}

export default PaymentScheme;