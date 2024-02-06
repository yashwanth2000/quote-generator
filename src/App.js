import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        const { advice } = data.slip;
        setAdvice(advice);
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>Random Quote</span>
        </button>
      </div>
    </div>
  );
};

export default App;
