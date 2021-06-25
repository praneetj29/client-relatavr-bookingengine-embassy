import React,{useState , useEffect} from 'react'
import Popup from "reactjs-popup";
import { getAgreementLink } from '../../api';
import './agreement.css';


export default function Agreement({ToggleCurrentView , setCompletion , status}) {

    useEffect(() => {
        document.title = ("MatchBox | Step 7");
      });

    const agreementLink = getAgreementLink("projectid");

    const [isChecked,setChecked] = useState(false);
    const [termsOpen , settermsOpen] = useState(false);

    const disableApplicantForm = () => {
        settermsOpen(false);
    }

    const TermsForm = () => {
        return(
        <div id="termsdiv">
            <p> Terms and conditions will come here </p>
        </div>)
    }

    const changeStep = (step) => {
        setCompletion({...status , [step] : true});
        ToggleCurrentView(step);
    }

    const Validate = () => {
        if (isChecked) 
        {
            alert("Thank You for Accepting 😄");
            document.querySelector('#step7tick').style.display = "inline-block";
            changeStep("Step8");
        } else {
            alert("Terms and Conditions Unchecked ❌");
        }
    }

    const GetURL = props => {
        const url = props.url;
        return(<img src={url} alt="Agreement" />)
    }
    return (
        <div>
            <div id="agreementcontent">
                <div id="agreementsection">
                {agreementLink.Agreement.map(filter => (
                                    <GetURL url={filter.url} />
                ))}
                </div>

                <div id="agreementactions">
                <span><input type="checkbox" onChange={(e) => setChecked(e.target.checked)}/>  <span onClick={() => settermsOpen(true)}> I Agree to the <span id="trmsandconditn">Terms &amp; Conditions</span></span></span>
                <span className="actions">
                    <button id="previous" onClick={() => ToggleCurrentView("Step6")}> PREVIOUS </button>
                    <button id="continue" onClick={() => Validate()}> CONFIRM &amp; SIGN </button>
                </span>
                </div>
            </div>
            <Popup open={termsOpen} modal onClose={disableApplicantForm}>
              <TermsForm />
            </Popup>
        </div>
    )
}
