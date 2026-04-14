import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import { getWeather } from "./services/api";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    const data = await getWeather(city);
    setWeather(data);
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>
      <SearchBox onSearch={handleSearch} />

      {loading && <Loader />}
      {!loading && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;