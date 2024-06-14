import React from "react";
import { Route, Routes } from "react-router-dom";
import EventPlanner from "./eventPlanner";
import Farmer from "./farmer";
import Traveler from "./traveller";
import SportsPlayer from "./sports";

const Dashboard = ({ weatherData,dailyData }) => {
  // console.log("Weather Data",dailyData);
  return (
    <>
      <Routes>
        <Route
          path="event-planner"
          element={
            <EventPlanner weatherData={weatherData} dailyData={dailyData} />
          }
        />
        <Route
          path="farmer"
          element={<Farmer weatherData={weatherData} dailyData={dailyData} />}
        />
        <Route
          path="traveler"
          element={<Traveler weatherData={weatherData} dailyData={dailyData} />}
        />
        <Route
          path="sports"
          element={
            <SportsPlayer weatherData={weatherData} dailyData={dailyData} />
          }
        />
      </Routes>
    </>
  );
};

export default Dashboard;
