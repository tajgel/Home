import { useEffect, useState } from "react";
import { fetchWeatherApi } from 'openmeteo';
import Header from "./Header"

function Weather() {
  const url = "https://api.open-meteo.com/v1/forecast"
  const [location, setLocation] = useState<GeolocationPosition>()
  const [temperature, setTemperature] = useState();
  const [rain, setRain] = useState()



  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => {
      setLocation(success)
      console.log(success)
      ogarnijPogode()
    }, (error) => {
      console.error(error)
    })
  }, [])
  async function ogarnijPogode() {
    const params = {
      "latitude": `${location?.coords.latitude}`,
      "longitude": `${location?.coords.longitude}`,
      "hourly": ["temperature_2m", "rain", "snowfall", "weather_code", "wind_speed_10m"],
      "timezone": "auto"
    }
    const response = await fetchWeatherApi(url, params)
    return response
  }    
  console.log(ogarnijPogode())
  return (
    <>
      <Header />
      <div className="h-[88vh] w-full bg-orange-400">
        {temperature}
      </div>
    </>
  )
}

export default Weather