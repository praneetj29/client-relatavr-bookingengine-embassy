import React,{useReducer} from 'react'
import './documents.css';
import {getDocumentsData} from '../../../api';
function Documents() {
    
    const apidocumentsData = getDocumentsData("x"); //Random ProjectIDis passed for now

    const [documentsData, setdocumentsData] = useReducer(
        (state, newState) => ({...state, ...newState}),apidocumentsData);
  
      const handleChange = e => {
        const name = e.target.name;
        const newValue = e.target.value;
        setdocumentsData({[name]: newValue});
      }
  
      const showdata = () => {
          console.table(documentsData);
      }

    //   const sendData = () => {

    //   API call can be made here!

    //   axios.post(`API URL`, {documentsData})
    //   .then(res => {
    //       console.log(res);
    //       console.log(res.data);
    //   });
    // }
    
    return (
        <div>
            <div className="documentscontainer">
                <div className="documentscontainercontent">
                    <h2> Documents </h2>
                </div>

                <div className="documentscontainercontent">
                    <h4> Electricity Bill </h4>
                    <input type="file" value={documentsData.document1 ?? ''} name="document1" placeholder="Title" onChange={handleChange} className="file"/>
                    {/* <input type="button" value="Upload" className="buttons"/> */}
                </div>

                <div className="documentscontainercontent">
                    <h4> Ration Card </h4>
                    <input type="file" value={documentsData.document2 ?? ''} name="document2" placeholder="Title" onChange={handleChange} className="file"/>
                    {/* <input type="button" value="Upload" className="buttons"/> */}
                </div>

                <div className="documentscontainercontent">
                    <h4> Election Card </h4>
                    <input type="file" value={documentsData.document3} name = "document3" placeholder="Title" onChange={handleChange} className="file"/>
                    {/* <input type="button" value="Upload" className="buttons"/> */}
                </div>

                <div className="documentscontainercontent">
                    <h4> Driving License </h4>
                    <input type="file" value={documentsData.document4} name = "document4" placeholder="Title" onChange={handleChange} className="file"/>
                    {/* <input type="button" value="Upload" className="buttons"/> */}
                </div>

                <div className="documentscontainercontent">
                    <h4> Passport </h4>
                    <input type="file" value={documentsData.document5} name = "document5" placeholder="Title" onChange={handleChange} className="file"/>
                    {/* <input type="button" value="Upload" className="buttons"/> */}
                </div>

                <div className="documentscontainercontent">
                    <h4> Document 6 </h4>
                    <input type="file" value={documentsData.document6} name = "document6" placeholder="Title" onChange={handleChange} className="file"/>
                    {/* <input type="button" value="Upload" className="buttons"/> */}
                </div>

                <div className="documentscontainercontent">
                    <h4> Document 7 </h4>
                    <input type="file" value={documentsData.document7} name = "document7" placeholder="Title" onChange={handleChange} className="file"/>
                    {/* <input type="button" value="Upload" className="buttons"/> */}
                </div>
            </div>
        </div>
    )
}

export default Documents;
