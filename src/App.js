import React, { useState } from "react";
import Popup from "../src/components/Popup";
import "./App.css";

const App = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="app1">
      <button onClick={() => setButtonPopup(true)} className="click">
        Popup
      </button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
    </div>
  );
};

export default App;
