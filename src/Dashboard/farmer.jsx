/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";

const Farmer = ({ weatherData }) => {
  const farmTime = weatherData ? calculateSoilMoisture(weatherData) : null;
  let backgroundImage = "";
  let tips = [];

  switch (farmTime) {
    case "Low : Consider planting drought-resistant crops like millet, sorghum, and certain varieties of beans.":
      backgroundImage = "url('/img/farmer/millets.jpg')";
      tips = [
        "Start early to avoid the afternoon heat.",
        "Water plants in the morning to reduce evaporation.",
        "Harvest fruits and vegetables in the morning for peak freshness.",
      ];
      break;
    case "Moderate : Consider planting crops like wheat, corn, and rice.":
      backgroundImage = "url('/img/farmer/rice.jpg')";
      tips = [
        "Take breaks to avoid heat exhaustion.",
        "Work in shaded areas during peak sunlight hours.",
        "Use this time to maintain and repair farm equipment.",
      ];
      break;
    case "High : Consider planting crops like sugarcane, bananas, and taro.":
      backgroundImage = "url('/img/farmer/banana.jpg')";
      tips = [
        "Use this cooler time of day for planting.",
        "Check for pests and diseases.",
        "Clean and store tools and equipment.",
      ];
      break;
    default:
      backgroundImage = ""; // Default background
      tips = [];
  }

  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prevTipIndex) => (prevTipIndex + 1) % tips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [tips]);

  return (
    <div className="event-planner-container">
      <div className="background_img" style={{ backgroundImage }}></div>
      <div className="info-box">
        <h2>Information</h2>
        {weatherData && (
          <div>
            <p>Current Weather: {weatherData.description}</p>
            <p>Rain Prediction: {weatherData.rain ? "Yes" : "No"}</p>
            <p>Soil Moisture: {calculateSoilMoisture(weatherData.humidity)}</p>
            <h3>Tips:</h3>
            <div>
              <p>{tips[currentTipIndex]}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const calculateSoilMoisture = (humidity) => {
  if (humidity <= 50) {
    return "Low : Consider planting drought-resistant crops like millet, sorghum, and certain varieties of beans.";
  } else if (humidity <= 70) {
    return "Moderate : Consider planting crops like wheat, corn, and rice.";
  } else {
    return "High : Consider planting crops like sugarcane, bananas, and taro.";
  }
};

export default Farmer;
