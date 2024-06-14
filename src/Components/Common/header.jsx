import React from "react";
import "../../style.css"; // Adjust the path as needed

const Header = ({ userName, onBack, place, temperature }) => {
  return (
    <header>
      <div className="left-section">
        {place && (
          <>
            <span>{place.toUpperCase()}</span>
            <span>{temperature}°C</span>
          </>
        )}
      </div>
      <h1>Weather Dashboard</h1>
      <div className="right-section">
        {userName && (
          <button className="back-button" onClick={onBack}>
            Back
          </button>
        )}
        <div className="user-info-container">
          {userName && (
            <div className="user-info">
              <span className="user-name">{userName}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
