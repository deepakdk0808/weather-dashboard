import axios from "axios";

export let fetchWeather = async (lat, lon) => {
  const apiKey = "8fa1f8a8c9be0bf6f4a9a13d5c7920fd";
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  let response = await axios.get(url);
  let data = response.data;
  // console.log("Coordinates",data);

  // Current weather data
  const currentWeather = {
    place: data.city.name,
    description: data.list[0].weather[0].description,
    temperature: Math.round(data.list[0].main.temp - 273.15),
    humidity: data.list[0].main.humidity,
    rain: data.rain ? true : false,
    windSpeed: data.list[0].wind.speed * 3.6,
  };

  // 7-day weather forecast
  const dailyForecast = data.list.slice(1, 8).map((day) => ({
    description: day.weather[0].description,
    temperature: {
      day: Math.round(day.main.temp - 273.15),
      night: Math.round(day.main.temp_min - 273.15),
    },
    humidity: day.main.humidity,
    rain: day.rain && day.rain["3h"] > 0 ? true : false,
    windSpeed: day.wind.speed * 3.6, // Convert from m/s to km/h
  }));


  // console.log("Current Weather", dailyForecast);

  return {
    currentWeather,
    dailyForecast
  };
};
