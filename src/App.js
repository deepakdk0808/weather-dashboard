import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Components/Common/header";
import Footer from "./Components/Common/footer";
import UserSelectModal from "./Components/Common/userModal";
import Dashboard from "./Dashboard/dashboard";
import { fetchWeather } from "./Services/weatherServices"; // Adjust the path as needed
import "./style.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [dailyData,setDailyData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          if (latitude && longitude) {
            try {
              const weather = await fetchWeather(latitude, longitude);
              setWeatherData(weather.currentWeather);
              setDailyData(weather.dailyForecast);
              // console.log("Weather Data",dailyData);
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
  }, [dailyData]);

  const handleGroupSelect = (name, group) => {
    setUserName(name);
    setSelectedGroup(group);
    setShowModal(false);
    navigate("/dashboard/" + group);
  };

  const handleBack = () => {
    setSelectedGroup(null);
    setShowModal(true);
    setUserName("");
    navigate("/");
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="app">
      <Header
        onBack={selectedGroup ? handleBack : null}
        userName={userName}
        
        place={weatherData ? weatherData.place : null}
        temperature={weatherData ? weatherData.temperature : null}
      />
      <main>
        {showModal && <UserSelectModal onGroupSelect={handleGroupSelect} />}
        <Routes>
          <Route
            path="/dashboard/*"
            element={<Dashboard weatherData={weatherData} dailyData={dailyData} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
