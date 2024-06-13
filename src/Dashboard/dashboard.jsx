import React from "react";
import { Route, Routes } from "react-router-dom";
import EventPlanner from "./eventPlanner";
import Farmer from "./farmer";
import Traveler from "./traveller";

const Dashboard = ({ weatherData }) => {
  return (
    <div className="dashboard">
      <Routes>
        <Route
          path="event-planner"
          element={<EventPlanner weatherData={weatherData} />}
        />
        <Route path="farmer" element={<Farmer weatherData={weatherData} />} />
        <Route
          path="traveler"
          element={<Traveler weatherData={weatherData} />}
        />
      </Routes>
    </div>
  );
};

export default Dashboard;
