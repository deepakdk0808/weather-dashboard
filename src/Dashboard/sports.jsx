/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const SportsPlayer = ({ weatherData, dailyData }) => {
  const sportsTime = weatherData ? getBestPlayTime(weatherData) : null;
  let backgroundImage = "";
  let tips = [];

  switch (sportsTime) {
    case "Indoor games only or you can play soccer in the rain":
      backgroundImage = "url('/img/sports/indoor_sports.jpg')";
      tips = [
        "Indoor games can help improve your agility and speed.",
        "Playing soccer in the rain can be a fun and challenging experience.",
        "Remember to wear appropriate gear when playing in the rain.",
      ];
      break;
    case "Good for any outdoor games":
      backgroundImage = "url('/img/sports/sunny.jpg')";
      tips = [
        "Outdoor games are a great way to enjoy the weather and stay active.",
        "Remember to stay hydrated and wear sunscreen.",
        "Try to mix up your games to work different muscle groups.",
      ];
      break;
    case "Play in evening or night time":
      backgroundImage = "url('/img/sports/normal.jpg')";
      tips = [
        "Playing in the evening can be a great way to unwind after a long day.",
        "Night games can help improve your visibility and reaction time.",
        "Remember to wear reflective gear when playing at night.",
      ];
      break;
    case "Night time is best for playing outdoor games":
      backgroundImage = "url('/img/sports/rainy.jpg')";
      tips = [
        "Night games can be a fun way to change up your routine.",
        "Playing in cooler temperatures can help improve your endurance.",
        "Remember to stay safe and visible when playing at night.",
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
      <div className="info-card">
        <div className="background_img" style={{ backgroundImage }}></div>
        <div className="info-box">
          <h2>Information</h2>
          {weatherData && (
            <div>
              <p>Current Weather: {weatherData.description}</p>
              <p>Rain: {weatherData.rain ? "Yes" : "No"}</p>
              <p>Recommended Play Time: {getBestPlayTime(weatherData)}</p>
              <h3>Tips:</h3>
              <div>
                <p>{tips[currentTipIndex]}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="forecast-card">
        <h2>7-Day Weather Forecast</h2>
        <div className="forecast-cards">
          {dailyData &&
            dailyData.map((day, index) => (
              <div className="day-forecast" key={index}>
                <p>{day.temperature.day}°C</p>
                <p>Rain: {day.rain ? "Yes" : "No"}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const getBestPlayTime = (weatherData) => {
  if (weatherData.rain) {
    return "Indoor games only or you can play soccer in the rain";
  } else if (weatherData.temperature <= 20) {
    return "Good for any outdoor games";
  } else if (weatherData.temperature <= 30) {
    return "Play in evening or night time";
  } else {
    return "Night time is best for playing outdoor games";
  }
};

export default SportsPlayer;
