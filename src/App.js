import "./App.css";
export default function App() {
  return (
    <div className="app">
      <div className="form">
        <h1 className="heading">ROI Calculator</h1>
        <p className="heading-right1">CAKE USD</p>
        <input
          className="input1"
          text="name"
          placeholder="                                                                                        0.000 USD"
        />
        <div className="button-group1">
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
          placeholder="                                                                                       0.000 USD"
        />
        <p className="heading-right4">-0.000 CAKE + 0.000000 DON</p>
        <p className="hide">Hide Details</p>
        <h3 className="timeframe">APY</h3>
        <ul>
          <li>Calculated based on current rates</li>
          <li>All figures are estimates provided for your convenience only, and by no means represent guaranteed returns</li>
        </ul>
      </div>
    </div>
  );
}

