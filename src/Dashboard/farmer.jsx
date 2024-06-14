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
        "दोपहर की गर्मी से बचने के लिए जल्दी शुरू करें।",
        "वाष्पीकरण को कम करने के लिए सुबह के समय पौधों को पानी दें।",
        "ताजगी की चोटी के लिए सुबह के समय फल और सब्जियां काटें।",
      ];
      break;
    case "Moderate : Consider planting crops like wheat, corn, and rice.":
      backgroundImage = "url('/img/farmer/rice.jpg')";
      tips = [
        "तापमान से थकान से बचने के लिए ब्रेक लें।",
        "धूप के प्रमुख समय में छाया दार क्षेत्रों में काम करें।",
        "इस समय का उपयोग कृषि उपकरणों की रखरखाव और मरम्मत करने के लिए करें।",
      ];
      break;
    case "High : Consider planting crops like sugarcane, bananas, and taro.":
      backgroundImage = "url('/img/farmer/banana.jpg')";
      tips = [
        "बोने के लिए दिन के इस ठंडे समय का उपयोग करें।",
        "कीटों और बीमारियों की जांच करें।",
        "उपकरण और उपकरण को साफ़ करें और संग्रहित करें।",
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
