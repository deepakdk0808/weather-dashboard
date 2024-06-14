import React from "react";
import { Route, Routes } from "react-router-dom";
import EventPlanner from "./eventPlanner";
import Farmer from "./farmer";
import Traveler from "./traveller";
import SportsPlayer from "./sports";

const Dashboard = ({ weatherData }) => {
  return (
    <>
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
        <Route
          path="sports"
          element={<SportsPlayer weatherData={weatherData} />}
        />
      </Routes>
    </>
  );
};

export default Dashboard;
