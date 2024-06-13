const Farmer = ({ weatherData }) => {

  return (
    <div>
      <h2>Information</h2>
      {weatherData && (
        <div>
          <p>Current Weather: {weatherData.description}</p>
          <p>Rain Prediction: {weatherData.rain ? "Yes" : "No"}</p>
          <p>Soil Moisture: {calculateSoilMoisture(weatherData.humidity)}</p>
        </div>
      )}
    </div>
  );
};

const calculateSoilMoisture = (humidity) => {
  if (humidity <= 50) {
    return "Low : Consider planting drought-resistant crops like millet, sorghum, and certain varieties of beans.";
  } else if (humidity <= 70) {
    return "Moderate : Consider planting crops like wheat, corn, and rice.";
  } else {
    return "High : Consider planting crops like sugarcane, bananas, and taro.";
  }
};

export default Farmer;
