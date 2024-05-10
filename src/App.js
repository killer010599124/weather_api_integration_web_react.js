import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import DataTable from 'react-data-table-component';
function App() {
  const [location, setLocation] = useState("");
  const [table, setTable] = useState([]);

  const fetchWeather = async (e) => {
    e.preventDefault();
    console.log(location);
    setTable([])
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=3C8TRCWYPKSPU83H6U8CJ5CUR&contentType=json`,
      {
        method: "GET",
      }
    );

    const weatherData = await response.json();

    console.log(weatherData);
    setTable(weatherData.days);
  };

  const columns = [
    {
      name: 'Cloud Cover',
      selector: row => row.cloudcover,
    },
    {
      name: 'Conditions',
      selector: row => row.conditions,
    },
    {
      name: 'Date Time',
      selector: row => row.datetime,
    },
    {
      name: 'Date Time Epoch',
      selector: row => row.datetimeEpoch,
    },
    {
      name: 'Description',
      selector: row => row.description,
    },
    {
      name: 'Dew',
      selector: row => row.dew,
    },
    {
      name: 'Feels Like',
      selector: row => row.feelslike,
    },
    {
      name: 'Feels Like Max',
      selector: row => row.feelslikemax,
    },
    {
      name: 'Feels Like Min',
      selector: row => row.feelslikemin,
    },
    {
      name: 'Humidity',
      selector: row => row.humidity,
    },
    {
      name: 'Icon',
      selector: row => row.icon,
    },
    {
      name: 'Moon Phase',
      selector: row => row.moonphase,
    },
    {
      name: 'Precipitation',
      selector: row => row.precip,
    },
    {
      name: 'Precipitation Cover',
      selector: row => row.precipcover,
    },
    {
      name: 'Precipitation Probability',
      selector: row => row.precipprob,
    },
    {
      name: 'Precipitation Type',
      selector: row => row.preciptype,
    },
    {
      name: 'Pressure',
      selector: row => row.pressure,
    },
    {
      name: 'Severe Risk',
      selector: row => row.severerisk,
    },
    {
      name: 'Snow',
      selector: row => row.snow,
    },
    {
      name: 'Snow Depth',
      selector: row => row.snowdepth,
    },
    {
      name: 'Solar Energy',
      selector: row => row.solarenergy,
    },
    {
      name: 'Solar Radiation',
      selector: row => row.solarradiation,
    },
    {
      name: 'Source',
      selector: row => row.source,
    },
    {
      name: 'Stations',
      selector: row => row.stations,
    },
    {
      name: 'Sunrise',
      selector: row => row.sunrise,
    },
    {
      name: 'Sunrise Epoch',
      selector: row => row.sunriseEpoch,
    },
    {
      name: 'Sunset',
      selector: row => row.sunset,
    },
    {
      name: 'Sunset Epoch',
      selector: row => row.sunsetEpoch,
    },
    {
      name: 'Temperature',
      selector: row => row.temp,
    },
    {
      name: 'Temperature Max',
      selector: row => row.tempmax,
    },
    {
      name: 'Temperature Min',
      selector: row => row.tempmin,
    },
    {
      name: 'UV Index',
      selector: row => row.uvindex,
    },
    {
      name: 'Visibility',
      selector: row => row.visibility,
    },
    {
      name: 'Wind Direction',
      selector: row => row.winddir,
    },
    {
      name: 'Wind Gust',
      selector: row => row.windgust,
    },
    {
      name: 'Wind Speed',
      selector: row => row.windspeed,
    },
  ];
  
  
 

  return (
    <div className="App">
      <h2>Enter Location and Weather Radar</h2>
      <input className="form-input" type="text" onChange={(e) => setLocation(e.target.value)} />
      <button className="btn btn-success" onClick={fetchWeather}>Submit</button>
      <DataTable
			columns={columns}
			data={table}
      responsive
		/>
    </div>
  );
}

export default App;
