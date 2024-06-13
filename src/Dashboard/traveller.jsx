const Traveler = ({ weatherData }) => {
  return (
    <div>
      <h2>Information</h2>
      {weatherData && (
        <div>
          <p>Current Weather: {weatherData.description}</p>
          <p>Rain Prediction: {weatherData.rain ? "Yes" : "No"}</p>
          <p>Wind Speed: {weatherData.windSpeed} km/hr</p>
          <p>Travel Advisory: {getTravelAdvisory(weatherData)}</p>
        </div>
      )}
    </div>
  );
};

const getTravelAdvisory = (weatherData) => {
   if (weatherData.rain) {
     return "It's raining. Use proper gears for traveling.";
   } else if (weatherData.temperature <= 25) {
     return "Can travel anytime.";
   } else if (weatherData.temperature <= 30) {
     return "Travel in early morning or late evening.";
   } else {
     return "Travel in night.";
   }
};

export default Traveler;
