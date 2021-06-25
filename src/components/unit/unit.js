import React, { useState , useEffect} from "react";
import "./unit.css";
import "./Modal/FloorSelection.css";
import Popup from "reactjs-popup";
// import { ReactSVG } from 'react-svg'
import { ReactComponent as Daisy } from "./SVG/Daisy/daisy.svg";
import { ReactComponent as Elderberry } from "./SVG/Elderberry/elderberry.svg";
import { ReactComponent as Fuscia } from "./SVG/Fuschia and Hibiscus/fuscia.svg";
import { ReactComponent as Hibiscus } from "./SVG/Fuschia and Hibiscus/hibiscus.svg";
import { ReactComponent as Gardenia } from "./SVG/Gardenia/gardenia.svg";
import NoSVG from "./SVG/undraw.svg";
import FloorSelection from "./Modal/FloorSelection";
import Detail from "./Detail/Detail";

import {getSelectUnitFilters} from "./../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faFilter, faSearchMinus, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// import {getSVGUrls} from '../../api';

function Nosvg() {
  return (
    <div id="⚙">
      <img src={NoSVG} alt="SVG Illustration" />
      <h1> No SVG Selected </h1>
    </div>
  );
}

const Unit = ({ToggleCurrentView , setCompletion , status}) => {
  let scale = 1.0;
  let zoomClass = document.querySelectorAll(".zoom");
  let svgrender = document.querySelector(".svgrender");
  const zoomin = () => {
    svgrender.style.overflowY = "scroll";
    svgrender.style.overflowX = "scroll";

    scale += 0.1;
    scale = Math.round(scale * 10) / 10;
    // console.log("Scale Value : " + scale);
    if (scale === 1.3) {
      alert("Max Scale Reached 🔍");
      document.querySelector("#zoomin").disabled = true;
      document.querySelector("#zoomout").disabled = false;
    } else {
      document
        .getElementById("Layer_1")
        .setAttribute("transform", `scale(${scale})`);
    }
  };

  const [viewDetail, setviewDetails] = useState(false);

  useEffect(() => {
    document.title = ("MatchBox | Step 1");
  });
  
  const ShowUnitDetail = value => {
    setviewDetails(value);
    console.log(viewDetail);
  };

  const zoomout = () => {
    scale -= 0.1;
    scale = Math.round(scale * 10) / 10;
    // console.log("Scale Value : " + scale);
    if (scale === 0.8) {
      alert("Min Scale Reached 🔍");
      document.querySelector("#zoomin").disabled = false;
      document.querySelector("#zoomout").disabled = true;
    } else {
      document
        .getElementById("Layer_1")
        .setAttribute("transform", `scale(${scale})`);
    }
  };

  // const zoominit = () => {
  //   svgrender.style.overflowY = "hidden";
  //   svgrender.style.overflowX = "hidden";

  //   scale = 1.0;
  //   document
  //     .getElementById("Layer_1")
  //     .setAttribute("transform", `scale(${scale})`);
  // };

  const initialData = ({
    Tower: "null",
    Block: "null",
    Floor: "null",
    Configuration: "null",
    Facing: "null",
    PriceRange: "null",
    View: "null"
  });

  const [filterData, setfilterData] = useState(initialData);
  
  const [SVG, setSVG] = useState("default");

  const [open, setOpen] = useState(false);

  const modal = pathid => {
    console.log("Path ID is : " + pathid);
    console.log("Selected Unit is : 1BHK");
    setOpen(true);
  };

  const disablepopup = () => {
    setOpen(false);
  };

  const handleChange = e => {

    setfilterData({
      ...filterData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if ((filterData.Tower === "null") || (filterData.Block === "null") || (filterData.Floor === "null")) {
      setSVG("default");
      zoomClass.forEach(element => (element.style.visibility = "hidden"));
      console.table(filterData);
      alert(" Please Select Appropriate Values ❌");
    } else {
      zoomClass.forEach(element => (element.style.visibility = "visible"));
      console.table(filterData);

      switch (filterData.Tower) {
        case "Daisy":
          find("Daisy");
          break;

        case "Elderberry":
          find("Elderberry");
          break;

        case "Fuscia":
          find("Fuscia");
          break;

        case "Gardenia":
          find("Gardenia");
          break;

        case "Hibiscus":
          find("Hibiscus");
          break;

        default:
          console.log("Unknown Tower");
      }
    }
  };

  const find = TowerName => {
    setSVG(TowerName);
    const paths = document.getElementsByTagName("path");
    console.log(filterData.Configuration);
    if (filterData.Configuration === "1BHK") {
      for (let path of paths) {
        if (path.id === "DAISY-B_-BLOCK") {
          continue;
        } else if (path.id !== "DAISY_B_1-12_105") {
          // path.style.fill = "white";
          path.style.opacity = 0.6;
          path.style.pointerEvents = "none";
        } else {
          path.style.fill = "green";
          path.style.opacity = 0.3;
          path.style.cursor = "pointer";
          path.style.pointerEvents = "auto";
          path.addEventListener("click", () => modal(path.id));
        }
      }
    }
  };

  // Get filters from API
  const filters = getSelectUnitFilters("projectId");

  // Generate Filterlist based on selection
  const Filter = props => {
    const { handleChange, filter} = props;
    const filterTitle = <option value="null"> Select {filter.title} </option>;
    const filterOptionItems = filter.options.map((option) => (
      <option name={option} key={option} value={option}>
        {option}
      </option>
    ));

    return (
      <select value={filterData[`${filter.title}`]} name={filter.title} onChange={handleChange} className={filter.title}>
        {filterTitle}
        {filterOptionItems}
      </select>
    );
  };

  // Get SVGUrls from API
  // const svgurls = getSVGUrls("x");

  // Render SVG Based on passed URL
  //   const ShowSVG = ({SVGUrl}) => {
  //     if(SVGUrl ==="default")
  //     {
  //       return(<Nosvg/>)
  //     }
  //     else
  //     {
  //       return(<ReactSVG src={svgurls[`${SVGUrl}`].url}/>);
  //     }      
  // }

  if (viewDetail === false) {
    return (
      <div>
        <div className="unitwrapper">
          <div className="filtersSection">
            <h1 id="UnitHeader"> Unit Selection </h1>

            <div className="filters">
              <div id="filterheader">
                <h3> <FontAwesomeIcon icon={faBuilding} size={"1x"}/> &nbsp; Select Unit </h3>
                <hr />
                {filters.primary.map(filter => (
                  <Filter filter={filter} handleChange={handleChange}/>
                ))}

                <button onClick={handleSubmit} id="primaryapplybtn"> Apply </button>

                <h3> <FontAwesomeIcon icon={faFilter} size={"1x"}/> &nbsp; More Filters </h3>
                <hr />

                {filters.secondary.map(filter => (
                  <Filter filter={filter} handleChange={handleChange}/>
                ))}

                <button onClick={handleSubmit} id="secondaryapplybtn"> Apply </button>
              </div>
            </div>
          </div>

          <div className="svgSection" id="svgSection">
            <div className="svgrender">
              {SVG === "default" && <Nosvg />}
              {SVG === "Daisy" && <Daisy />}
              {SVG === "Elderberry" && <Elderberry />}
              {SVG === "Fuscia" && <Fuscia />}
              {SVG === "Gardenia" && <Gardenia />}
              {SVG === "Hibiscus" && <Hibiscus />}
            </div>
            <div id="zoomingbtns">
              <button className="zoom" id="zoomin" onClick={zoomin}><FontAwesomeIcon icon={faSearchPlus} size={"2x"}/></button>
              <button className="zoom" id="zoomout" onClick={zoomout}><FontAwesomeIcon icon={faSearchMinus} size={"2x"}/></button>
            </div>
            {/* Dynamically load SVG(s) from the component below 
            Currently commented as SVG(s) are not on serverurls to fetch from*/}
            {/* <ShowSVG SVGUrl={SVG}/> */}

            <Popup open={open} modal onClose={disablepopup}>
              <FloorSelection ToggleDetailView={ShowUnitDetail} />
            </Popup>
          </div>
        </div>
      </div>
    );
  } else {
    return <Detail ToggleView={ToggleCurrentView} ViewDetails={setviewDetails} setComplete={setCompletion} stepstatus={status}/>;
  }
};

export default Unit;
