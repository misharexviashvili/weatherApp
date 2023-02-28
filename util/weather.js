const WEATHER_API_KEY = "1d91b7cd646bfb88cf27351187c18075#";
export async function getWeather(lat, lng) {
  const url = `http://api.weatherapi.com/v1/current.json?key=a91cc28ac1b14bdc8f7192755232802&q=${lat},${lng}&aqi=no`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const data = await response.json();
  return data;
}
