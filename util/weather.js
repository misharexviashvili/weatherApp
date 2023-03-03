const WEATHER_API_KEY = "a91cc28ac1b14bdc8f7192755232802";
export async function getWeather(lat, lng) {
  console.log('log of weather func',lat,lng)
  const url = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${lat},${lng}&aqi=no`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const data = await response.json();
  return data;
}

export async function get7DaysWeather(lat, lng) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lng}&days=7`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const data = await response.json();
  return data;
}
