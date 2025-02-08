import React, { useState } from "react";
import Weather from "./components/Weather";
import "./App.css";

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
          className="city-input" // Dodajemo klasu za input polje
        />
        <Weather city={city} />
      </header>
    </div>
  );
}

export default App;
