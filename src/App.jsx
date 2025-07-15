import "./App.css";
import React, { useState } from "react";
import Weather from "./components/Weather.jsx";

function App() {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleInputChange}
          className="city-input"
        />
        <Weather city={city} />
      </header>
    </div>
  );
}

export default App;
