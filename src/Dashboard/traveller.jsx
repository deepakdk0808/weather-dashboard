/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const Traveler = ({ weatherData }) => {
  const travelTime = weatherData ? getTravelAdvisory(weatherData) : null;
  let backgroundImage = "";
  let tips = [];

  switch (travelTime) {
    case "It's raining. Use proper gears for traveling.":
      backgroundImage = "url('/img/travller/rain_travelling.jpg')";
      tips = [
        "Always check the weather forecast before planning your travel.",
        "Carry raincoats and umbrellas to stay dry.",
        "Be cautious while driving in the rain.",
      ];
      break;
    case "Can travel anytime.":
      backgroundImage = "url('/img/travller/anytime_travelling.jpg')";
      tips = [
        "Traveling during the day can be more enjoyable with good weather.",
        "Always carry water and snacks.",
        "Don't forget to take breaks to rest and enjoy the scenery.",
      ];
      break;
    case "Travel in early morning or late evening.":
      backgroundImage = "url('/img/travller/morning_travelling.jpg')";
      tips = [
        "Traveling early in the morning or late in the evening can help avoid traffic.",
        "Make sure to have proper lighting if traveling in the evening.",
        "Always check the weather forecast before planning your travel.",
      ];
      break;
    case "Travel in night.":
      backgroundImage = "url('/img/travller/night_travelling.jpg')";
      tips = [
        "Traveling at night can be peaceful and less crowded.",
        "Ensure your vehicle's lights are working properly.",
        "Stay alert and take breaks if you feel tired.",
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
            <p>Wind Speed: {weatherData.windSpeed.toFixed(2)} km/hr</p>
            <p>Travel Advisory: {getTravelAdvisory(weatherData)}</p>
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

const getTravelAdvisory = (weatherData) => {
  if (weatherData.rain) {
    return "It's raining. Use proper gears for traveling.";
  } else if (weatherData.temperature <= 20) {
    return "Can travel anytime.";
  } else if (weatherData.temperature <= 30) {
    return "Travel in early morning or late evening.";
  } else {
    return "Travel in night.";
  }
};

export default Traveler;
