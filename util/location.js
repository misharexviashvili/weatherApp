const GOOGLE_API_KEY = "AIzaSyChD0T_irpIXZJ4xrkZuZZ-5oDd1CD4NrY";

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch adress");
  }
  const data = await response.json();
  // data.results[0].formatted_adress google api specific
  const address = data.results[0].formatted_address;
  console.log("getAdress func log", address);
  return address;
}
