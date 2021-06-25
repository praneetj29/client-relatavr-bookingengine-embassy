import React,{useEffect , useState} from 'react'
import "./kyc.css";
import { Formik , Form , Field , ErrorMessage , } from "formik";
import * as Yup from 'yup';

export default function Kyc({ToggleCurrentView , setCompletion, status}) {

    useEffect(() => {
        document.title = ("MatchBox | Step 4");
      });

      const initialValues = {
        title: "",
        firstname: "",
        middlename: "",
        lastname: "",
        countrycode: "",
        mobileno: "",
        email: "",
        dob: "",
        nationality: "",
        citizenof: "",
        pan: "",
        panimg: "",
        aadhar: "",
        aadharimg: "",
        education: "",
        profession: "",
        company: "",
        designation: "",
        roi: "",
        ismarried: "",
      };

      const [KYCformData, setKYCformData] = useState(initialValues);
    
      const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        firstname: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
        countrycode: Yup.string().required('Required'),
        citizenof: Yup.string().required('Required'),
        mobileno: Yup.string().matches(/^[0-9]\d{9}$/, {message: "Please enter valid number."}).required("Required"),
        email: Yup.string().email('Invalid Email Format').required('Required'),
        dob: Yup.string().required('Required'),
        nationality: Yup.string().required('Required'),
        pan: Yup.string().matches('[A-Z]{5}[0-9]{4}[A-Z]{1}' , 'Invalid PAN Number').required('Required'),
        panimg: Yup.string().matches('^.*\\.(jpg|JPG|png|PNG|pdf|PDF|jpeg|JPEG)$', {message: 'File Type not supported!'}).required('Required'),
        aadhar: Yup.string().matches('^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$' , 'Invalid Aadhar Number').required('Required'),
        aadharimg: Yup.string().matches('^.*\\.(jpg|JPG|png|PNG|pdf|PDF|jpeg|JPEG)$', {message: 'File Type not supported!'}).required('Required'),
        education: Yup.string(),
        profession: Yup.string(),
        company: Yup.string(),
        designation: Yup.string(),
        roi: Yup.string().required('Required'),
        ismarried: Yup.string().required("Required"),
      });

    const changeStep = (step) => {
        setCompletion({...status , [step] : true});
        ToggleCurrentView(step);
    }

    const handleChange = e => {
        setKYCformData({
            ...KYCformData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const onSubmit = (KYCData) => {
        
        let flag = true;

        console.table(KYCData);

        for(let value in KYCData)
        {
            if(KYCData[value] === null)
            {
                flag = false;
            }
        }

        flag && changeStep("Step5");
        
        // API Call can be made here
    }

    return (
        <div id="kycwrapper">
            <h1>Buyer Information</h1> 
      <div className="kyccontainer">
        <Formik initialValues={initialValues} validationSchema={validationSchema} handleChange={handleChange} onSubmit={onSubmit}>
        <Form>
          <div className="form-container">
              <div className="form-control">
                  <h4> Title </h4>
                  <Field as="select" name="title">
                      <option>Select Title</option>
                      <option value="Mr.">Mr.</option>
                  </Field>
                  <ErrorMessage name="title">{msg => <p class="error">{msg}</p>}</ErrorMessage>
              </div>
              <div className="form-control">
                  <h4> First Name* </h4>
                  <Field type="text" name="firstname" />
                  <ErrorMessage name="firstname">{msg => <p class="error">{msg}</p>}</ErrorMessage>
              </div>
              <div className="form-control">
                  <h4> Middle Name </h4>
                  <Field type="text" name="middlename" />
              </div>
          </div>
  
          <div className="form-container">
                  <div className="form-control">
                      <h4> Last Name* </h4>
                      <Field type="text" name="lastname"/>
                      <ErrorMessage name="lastname">{msg => <p class="error">{msg}</p>}</ErrorMessage>
                  </div>
                  <div className="form-control">
                      <h4> Country Code* </h4>
                      <Field as="select" name="countrycode" >
                          <option>Select Code</option>
                          <option value="+91">+91</option>
                      </Field>
                      <ErrorMessage name="countrycode">{msg => <p class="error">{msg}</p>}</ErrorMessage>
                  </div>
                  <div className="form-control">
                      <h4> Mobile No* </h4>
                      <Field type="text" maxLength="10" name="mobileno" onKeyPress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"/>
                      <ErrorMessage name="mobileno">{msg => <p class="error">{msg}</p>}</ErrorMessage>
                  </div>
          </div>
  
          <div className="form-container">
                  <div className="form-control">
                      <h4> Email ID* </h4>
                      <Field type="email" name="email"/>
                      <ErrorMessage name="email">{msg => <p class="error">{msg}</p>}</ErrorMessage>
                  </div>
                  <div className="form-control">
                      <h4> DOB* </h4>
                      <Field type="date" name="dob"/>
                      <ErrorMessage name="dob">{msg => <p class="error">{msg}</p>}</ErrorMessage>
                  </div>
                  <div className="form-control">
                      <h4> Nationality* </h4>
                      <Field type="text" name="nationality"/>
                      <ErrorMessage name="nationality">{msg => <p class="error">{msg}</p>}</ErrorMessage>
                  </div>
          </div>
  
          <div className="form-container">
              <div className="form-control">
                      <h4> Citizen Of* </h4>
                      <Field type="text" name="citizenof"/>
                      <ErrorMessage name="citizenof">{msg => <p class="error">{msg}</p>}</ErrorMessage>
              </div>
          </div>
  
          <div className="form-container-upload">
              <div className="form-control">
                      <h4> PAN Number* </h4>
                      <Field type="text" name="pan"/>
                      <ErrorMessage name="pan">{msg => <p class="error">{msg}</p>}</ErrorMessage>
              </div>
              <div className="form-control">
                      <h4> Upload PAN Image* </h4>
                      <Field type="file" name="panimg"/>
                      <ErrorMessage name="panimg">{msg => <p class="error">{msg}</p>}</ErrorMessage>
              </div>
              <div className="form-control">
                      <Field type="button" class="btn main" value="Upload"/>
              </div>
          </div>
  
          <div className="form-container-upload">
              <div className="form-control">
                      <h4> Aadhar Number* </h4>
                      <Field type="text" name="aadhar" />
                      <ErrorMessage name="aadhar">{msg => <p class="error">{msg}</p>}</ErrorMessage>
              </div>
              <div className="form-control">
                      <h4> Upload Aadhar Image* </h4>
                      <Field type="file" name="aadharimg"/>
                      <ErrorMessage name="aadharimg">{msg => <p class="error">{msg}</p>}</ErrorMessage>
              </div>
              <div className="form-control">
                      <Field type="button" class="btn main" value="Upload"/>
              </div>
          </div>
  
          <div className="form-container">
                  <div className="form-control">
                      <h4> Education </h4>
                      <Field type="text" name="education"/>
                  </div>
                  <div className="form-control">
                      <h4> Profession </h4>
                      <Field type="text" name="profession"/>
                  </div>
          </div>
  
          <div className="form-container">
                  <div className="form-control">
                      <h4> Company </h4>
                      <Field type="text" name="company"/>
                  </div>
                  <div className="form-control">
                      <h4> Designation </h4>
                      <Field type="text" name="designation"/>
                  </div>
          </div>
  
          <div className="form-container">
                  <div className="form-control">
                      <h4> Resident of India </h4>
                      <Field type="radio" name="roi" value="Yes" /> Yes &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <Field type="radio" name="roi" value="No" /> No
                      <ErrorMessage name="roi">{msg => <p class="error">{msg}</p>}</ErrorMessage>
                      <h4> Martial Status </h4>
                      <Field type="radio" name="ismarried" value="Single" /> Single &nbsp; &nbsp; &nbsp;
                      <Field type="radio" name="ismarried" value="Married" /> Married
                      <ErrorMessage name="ismarried">{msg => <p class="error">{msg}</p>}</ErrorMessage>
                  </div>
          </div>
          <br/>
          <div className="form-container">
              <div className="form-control-bottom">
                <button class="btn prev" onClick={() => ToggleCurrentView("Step3")}> Previous </button>
                <button className="btn main" onClick={() => alert("To be Linked")}> Block Unit </button>
                <Field type="submit" class="btn main" name="submit" value="Confirm &amp; Pay"/>
              </div>
          </div>
        </Form>
        </Formik>
      </div>
      </div>
    );
}