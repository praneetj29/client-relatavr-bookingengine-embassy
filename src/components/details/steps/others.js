import React,{useReducer} from 'react'
import { getOthersData } from '../../../api';
import './others.css';

function Others() {

    const apiothersData = getOthersData("x"); //Random ProjectIDis passed for now

    const [othersData, setothersData] = useReducer(
        (state, newState) => ({...state, ...newState}),apiothersData);
  
    const handleChange = e => {
        const name = e.target.name;
        const newValue = e.target.value;
        setothersData({[name]: newValue});
    }

    const showData = () => {
        console.table(othersData);
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
            <div className="otherscontainer">

                <div className="otherscontainercontent">
                    <h2> Other Information </h2>    
                </div>

                <div className="otherscontainercontent">
                    <h4> Info 1 </h4>
                    <input type="text" placeholder="Info 1" value={othersData.info1 ?? ''} name="info1" onChange={handleChange} className="info"/>
                </div>

                <div className="otherscontainercontent">
                    <h4> Info 2 </h4>
                    <input type="text" placeholder="Info 2" value={othersData.info2 ?? ''} name="info2" onChange={handleChange} className="info"/>
                </div>                
                
                <div className="otherscontainercontent">
                    <h4> Info 3 </h4>
                    <input type="text" placeholder="Info 3" value={othersData.info3 ?? ''} name="info3" onChange={handleChange} className="info"/>
                </div>                
                
                <div className="otherscontainercontent">
                    <h4> Info 4 </h4>
                    <input type="text" placeholder="Info 4" value={othersData.info4 ?? ''} name="info4" onChange={handleChange} className="info"/>
                </div>                
                
                <div className="otherscontainercontent">
                    <h4> Info 5 </h4>
                    <input type="text" placeholder="Info 5" value={othersData.info5 ?? ''} name="info5" onChange={handleChange} className="info"/>
                </div>                
                
                <div className="otherscontainercontent">
                    <h4> Info 6 </h4>
                    <input type="text" placeholder="Info 6" value={othersData.info6 ?? ''} name="info6" onChange={handleChange} className="info"/>
                </div>                
                
                <div className="otherscontainercontent">
                    <h4> Info 7 </h4>
                    <input type="text" placeholder="Info 7" value={othersData.info7 ?? ''} name="info7" onChange={handleChange} className="info"/>
                </div> 
            </div>
        </div>
    )
}

export default Others;
