import React from "react";
import { useNavigate } from "react-router-dom";

const UserSelect = () => {
  const navigate = useNavigate();

  const handleUserSelection = (userType) => {
    navigate(`/dashboard/${userType}`);
  };

  return (
    <div className="user-select">
      <h2>Select Your User Group</h2>
      <button onClick={() => handleUserSelection("event-planner")}>
        Event Planner
      </button>
      <button onClick={() => handleUserSelection("farmer")}>Farmer</button>
      <button onClick={() => handleUserSelection("traveler")}>Traveller</button>
    </div>
  );
};

export default UserSelect;
