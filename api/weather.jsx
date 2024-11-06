import axios from "axios";
import { API_KEY } from "../constants";

const forecastEndPoint = (
  params
) => `https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&appid=${API_KEY}`;

const locationsEndPoint = (
  params
) => `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${params.cityName}
 `;
const apiCall = async (endpoint) => {
  const option = {
    method: "GET",
    url: endpoint,
  };
  try {
    const response = await axios.request(option);
    return response.data;
  } catch {
    console.log("error:", err);
    return null;
  }
};

export const fetchWeatherForecast = (params) => {
  return apiCall(forecastEndPoint(params));
};

export const fetchLocations = (params) => {
  return apiCall(locationsEndPoint(params));
};