import cake from "../images/cake.png";
import on from "../images/switch.png";
import off from "../images/off.png";
import icon from "../images/icon.png";
import coolicon from "../images/coolicon.png";
import React, { useState } from "react";

export default function Popup(props) {
  const [details, setDetails] = useState(true);
  const show = () => {
    setDetails(false);
  };

  const hide = () => {
    setDetails(true);
  };

  return props.trigger ? (
    <div className="app">
      <div className="form">
        <h1 className="heading">ROI Calculator</h1>
        <button className="close" onClick={() => props.setTrigger()}>
          <img src={icon} alt="" />
        </button>
        <p className="heading-right1">
          <img src={cake} alt="" />
          CAKE  <img src={on} alt="" />
          USD
        </p>
        <input
          className="input1"
          text="name"
          placeholder="                                                                    0.000 USD"
        />
        <div className="button-group1">
          <button className="buttons">USE BALANCE</button>
          <button className="buttons">$1000</button>
          <button className="buttons">$100</button>
          <p className="heading-right2">-CAKE 0.000</p>
        </div>
        <p className="timeframe">Timeframe</p>
        <div className="button-group2">
          <button className="button btn">1Day</button>
          <button className="button">7Days</button>
          <button className="button">30Days</button>
          <button className="button">1Year</button>
          <button className="button">5Year</button>
        </div>
        <p className="timeframe">Enable Accelerated APY</p>
        <img className="off" src={off} alt="" />
        <p className="tier">Select Tier</p>
        <div className="button-group3">
          <button className="button btn">Tier1</button>
          <button className="button">Tier2</button>
          <button className="button">Tier3</button>
          <button className="button">Tier4</button>
          <button className="button">Tier5</button>
          <p className="heading-right3">ROI at Current Rates</p>
        </div>
        <input
          className="input2"
          text="name"
          placeholder="                                                                    0.000 USD"
        />
        <p className="heading-right4">-0.000 CAKE + 0.000000 DON</p>
        {/* <button onClick={change} className="show-hide">{details?"show-details":"hide-details"} */}
        {details ? (
          <button onClick={show} className="show-hide ">
            Show details
            <img src={coolicon} alt="" />
          </button>
        ) : (
          <button onClick={hide} className="show-hide">
            Hide details
            <img src={coolicon} alt="" />
          </button>
        )}
        {/* </button> */}
        <div className={details ? "show" : ""}>
          <h3 className="timeframe">APY</h3>
          <ul>
            <li>Calculated based on current rates</li>
            <li>
              All figures are estimates provided for your convenience only, and
              by no means represent guaranteed returns
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
