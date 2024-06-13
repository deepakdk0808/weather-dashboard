import axios from "axios";

export let fetchWeather = async (lat, lon) => {
  const apiKey = "8fa1f8a8c9be0bf6f4a9a13d5c7920fd";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  let response = await axios.get(url);
  let data = response.data;
  console.log("Coordinates", data.name);
  return {
    place: data.name,
    description: data.weather[0].description,
    temperature: Math.round(data.main.temp - 273.15),
    humidity: data.main.humidity,
    rain: data.rain ? true : false,
    windSpeed: data.wind.speed * 3.6,
  };
};
