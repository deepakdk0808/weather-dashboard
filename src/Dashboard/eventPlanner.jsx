const EventPlanner = ({weatherData}) => {

  return (
    <div>
      <h2>Information</h2>
      {weatherData &&  
        (
          <div>
            <p>Current Weather: {weatherData.description}</p>
            <p>Rain: {weatherData.rain ? "Yes" : "No"}</p>
            <p>Recommended Event Time: {getBestEventTime(weatherData)}</p>
          </div>
        )}
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
