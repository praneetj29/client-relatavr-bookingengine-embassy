import React,{useState} from "react";
import "./communication.css";
import Popup from "reactjs-popup";
import {getCommunicationData} from'../../../api';

function Communication() {

  const apiCommunicationData = getCommunicationData("x"); //Random ProjectID(s) passed for now

      // const [communicationData, setcommunicationData] = useReducer(
      //     (state, newState) => ({...state, ...newState}),apiCommunicationData);

      // ++++++++ Gets No. of Applicants in the JSON +++++++++++ //

      const applicantkeys = Object.keys(apiCommunicationData);

      const defaultdata = ({houseno : '', curraddr : '', peraddr : ''});
      const [apidata,setapidata] = useState(defaultdata);

      const [formOpen , setformOpen] = useState(false);
      
      const AddApplicant = () => {
        setformOpen(true);
      }

      const disableApplicantForm = () => {
        setformOpen(false);
      }

      const ApplicantForm = () => {

        const [newApplicant, setnewApplicant] = useState({houseno : '', curraddr : '', peraddr : ''});

        const createApplicant = e => {
          e.preventDefault();
          console.table(newApplicant);
          alert("Data Recieved and displayed in console");

          // POST API call to be made here
        }

        return(
          <div>
            <div className="newapplicantwrapper">
              <form onSubmit={createApplicant}>
              <div className="communicationdetails">
                <h2> Add New Applicant Data </h2>
                  <span> Building Flat No : </span>
                  <input 
                    type="text" 
                    name="newapplicant[houseno]"
                    value={newApplicant.houseno}
                    onChange={e =>setnewApplicant({ ...newApplicant, houseno: e.target.value})} 
                  />
                  <span> Current Address : </span>
                  <input 
                    type="text" 
                    name="newapplicant[curaddr]"
                    value={newApplicant.curraddr}
                    onChange={e =>setnewApplicant({ ...newApplicant, curraddr: e.target.value})} 
                  />
                  <span> Permanent Address : </span>
                  <input 
                    type="text" 
                    name="newapplicant[peraddr]"
                    value={newApplicant.peraddr}
                    onChange={e =>setnewApplicant({ ...newApplicant, peraddr: e.target.value})} 
                  />
                  <button className="applicantbtn" onClick={createApplicant}>Submit</button>
              </div>
              </form>
            </div>
          </div>
        )
      }

      const setDetails = (applicantid) => {
        const newdata = apiCommunicationData[applicantid];
        setapidata(apidata =>{
          return {...apidata , ...newdata}
        });
      }

      const submitHandler = (event) => {
        event.preventDefault();
        console.log(apidata);
      };

      const CommunicationDiv = () => {
        
        return(
        <div className="communicationdetails">
          <h2> Communication Info </h2>
            <span> Building Flat No : </span>
            <input type="text" name="houseno" value={apidata.houseno} onChange={e => {setapidata({ ...apidata, houseno: e.target.value });}} placeholder="House No."/>
            <span> Current Address : </span>
            <input type="text" name="curaddr" value={apidata.curraddr} onChange={e => setapidata({ ...apidata , curraddr: e.target.value})} placeholder="Current Address" />
            <span> Permanent Address : </span>
            <input type="text" name="peraddr" value={apidata.peraddr} onChange={e => setapidata({ ...apidata , peraddr: e.target.value})} placeholder="Permanent Address" />
            <button className="applicantbtn" onClick={submitHandler}> Submit </button>
        </div>)
      }

      const ApplicantsDiv = () => {
        return(applicantkeys.map((app) =>{
          return(
            <div className="applicantdetails" onClick={() => setDetails(app)}>
              <h4 id="applicanttitle">{app}</h4>
            </div>);
          })
        );
      }
    
  return (
    <div>
      <div className="communicationcontainer">
        <div className="communicationcontainercontent">
          <CommunicationDiv/>
          <div id="usercontainer">
            <div className="addapplicantbtn" onClick={AddApplicant}>
              <h3> Add Applicant </h3>
            </div>
            <Popup open={formOpen} modal onClose={disableApplicantForm}>
              <ApplicantForm />
            </Popup>
            <div>
              <ApplicantsDiv />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Communication;