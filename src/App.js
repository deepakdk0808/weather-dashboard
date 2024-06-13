// App.js
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Common/header";
import Footer from "./Components/Common/footer";
import UserSelect from "./Components/Common/userSelect";
import Dashboard from "./Dashboard/dashboard";
import { fetchWeather } from "./Services/weatherServices"; // Adjust the path as needed
import "./style.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          if (latitude && longitude) {
            try {
              const weather = await fetchWeather(latitude, longitude);
              setWeatherData(weather);
            } catch (err) {
              console.error(err);
              setError("Failed to fetch weather data");
            }
          } else {
            setError("Could not retrieve geolocation data");
          }
        },
        (err) => {
          console.error(err);
          setError("Geolocation not supported or permission denied");
        }
      );
    } else {
      setError("Geolocation not supported by your browser");
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="app">
      <Header />
      <div className="temp">
        <p>Place: {weatherData?.place.toUpperCase()}</p>
        <p>Temperature: {weatherData?.temperature}°C</p>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<UserSelect />} />
          <Route
            path="/dashboard/*"
            element={<Dashboard weatherData={weatherData} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
