/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const EventPlanner = ({ weatherData }) => {
  const eventTime = weatherData ? getBestEventTime(weatherData) : null;
  let backgroundImage = "";
  let tips = [];

  switch (eventTime) {
    case "Indoor events only":
      backgroundImage = "url('/img/eventPlanner/indoor_event.jpg')";
      tips = [
        "Ensure adequate ventilation in the event space.",
        "Consider activities that can be enjoyed indoors.",
        "Have a contingency plan in case of power outages.",
      ];
      break;
    case "Anytime":
      backgroundImage = "url('/img/eventPlanner/anytime_event.jpg')";
      tips = [
        "Plan for both indoor and outdoor activities.",
        "Ensure there are shaded areas if the event is outdoors.",
        "Have a flexible schedule to accommodate changes in weather.",
      ];
      break;
    case "Evening or Night":
      backgroundImage = "url('/img/eventPlanner/evening_event.jpg')";
      tips = [
        "Ensure the event area is well-lit.",
        "Consider activities that can be enjoyed in cooler temperatures.",
        "Plan for potential changes in weather during the event.",
      ];
      break;
    case "Night":
      backgroundImage = "url('/img/eventPlanner/night_event.jpg')";
      tips = [
        "Ensure the event area is well-lit.",
        "Plan for activities that can be enjoyed in cooler temperatures.",
        "Consider potential noise restrictions for late-night events.",
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
            <p>Rain: {weatherData.rain ? "Yes" : "No"}</p>
            <p>Recommended Event Time: {getBestEventTime(weatherData)}</p>
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

const getBestEventTime = (weatherData) => {
  if (weatherData.rain) {
    return "Indoor events only";
  } else if (weatherData.temperature <= 20) {
    return "Anytime";
  } else if (weatherData.temperature <= 30) {
    return "Evening or Night";
  } else {
    return "Night";
  }
};

export default EventPlanner;
